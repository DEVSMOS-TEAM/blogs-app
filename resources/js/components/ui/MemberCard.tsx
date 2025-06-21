import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Member } from '@/lib/types.d.';

export function MemberCard({ member, loading }: { member: Member; loading?: boolean }) {
    return (
        <Card className={`border-2 transition-shadow ${
            loading
                ? 'bg-muted text-muted-foreground grayscale opacity-60 pointer-events-none'
                : 'bg-background hover:shadow-lg'
        }`}>
            <CardContent className="p-6">
                <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                        {loading ? (
                            <Skeleton className="w-32 h-32 rounded-full" />
                        ) : (
                            <>
                                <img
                                    src={member.image_url}
                                    alt={`Profile picture of ${member.name}`}
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover border-4 border-background shadow-lg"
                                />
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                                    <member.Badge_icon className="h-3 w-3" />
                                </div>
                            </>
                        )}
                    </div>
                    {loading ? (
                        <>
                            <Skeleton className="h-5 w-32 mx-auto mb-2" />
                            <Skeleton className="h-4 w-24 mx-auto mb-3" />
                            <div className="space-y-2 mb-4">
                                <Skeleton className="h-3 w-3/4 mx-auto" />
                                <Skeleton className="h-3 w-2/3 mx-auto" />
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium mb-3">{member.role}</p>
                            <p className="text-sm mb-4 leading-relaxed">{member.detailed_info}</p>
                        </>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium mb-2 text-sm">Specialties</h4>
                        <div className="flex flex-wrap gap-1">
                            {loading
                                ? Array.from({ length: 3 }).map((_, idx) => (
                                    <Skeleton key={idx} className="h-5 w-16 rounded" />
                                ))
                                : member.Specialties.map((specialty, index) => (
                                    <Badge variant="secondary" className="text-xs" key={index}>
                                        {specialty}
                                    </Badge>
                                ))}
                        </div>
                    </div>

                    <div className="flex gap-2 justify-center">
                        {loading
                            ? Array.from({ length: 3 }).map((_, idx) => (
                                <Skeleton key={idx} className="h-8 w-8 rounded-full" />
                            ))
                            : member.social_links.map((social_link, index) => {
                                const SocialIcon = social_link.icon;
                                return (
                                    <Button variant="outline" size="sm" asChild key={index}>
                                        <a href={social_link.url} target="_blank">
                                            <SocialIcon className="h-3 w-3" />
                                        </a>
                                    </Button>
                                );
                            })}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
