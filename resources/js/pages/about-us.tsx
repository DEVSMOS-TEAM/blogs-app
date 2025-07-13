import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {Twitter, Mail, Calendar, Users, BookOpen } from "lucide-react"
import { RootLayout } from '@/layouts/RootLayout';
import { DATA } from '@/data/data';
import { Member } from '@/lib/types.d.';
import { MemberCard } from '@/components/ui/MemberCard';

export default function AboutUs() {
    return (
        <RootLayout title="About Us">
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative py-20 px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            About <span className="text-primary">Kumnet Khnhom</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            A modern blogging platform built with passion, designed to empower writers and connect communities through
                            the art of storytelling.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Founded in 2025</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>1,000+ Writers</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <BookOpen className="h-4 w-4" />
                                <span>5,000+ Articles</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Developer Section */}
                <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                The passionate team behind BlogCraft, dedicated to building the best blogging platform for creators
                                worldwide.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {
                                DATA.about_us.members.map((member: Member, index: number) => {
                                    return <MemberCard key={index} member={member} />
                                })
                            }
                        </div>

                        {/* Team Stats */}
                        <div className="mt-12 pt-8 border-t">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                                    <div className="text-xs text-muted-foreground">Combined Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                                    <div className="text-xs text-muted-foreground">Projects Completed</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                    <div className="text-xs text-muted-foreground">Platform Monitoring</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-xs text-muted-foreground">Passion Driven</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-xl text-muted-foreground">Empowering voices, one story at a time</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-2">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">For Writers</h3>
                                    <p className="text-muted-foreground">
                                        We believe every writer deserves a platform that's as passionate about their craft as they are.
                                        BlogCraft provides the tools and freedom to focus on what matters most - your content.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-2">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">For Readers</h3>
                                    <p className="text-muted-foreground">
                                        We're building a community where meaningful conversations happen, where readers can discover amazing
                                        content, and where every interaction adds value to the writing ecosystem.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">BlogCraft by Numbers</h2>
                            <p className="text-muted-foreground">Growing every day thanks to our amazing community</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">1,000+</div>
                                <div className="text-sm text-muted-foreground">Active Writers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                                <div className="text-sm text-muted-foreground">Published Articles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                                <div className="text-sm text-muted-foreground">Monthly Readers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                                <div className="text-sm text-muted-foreground">Uptime</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 px-4 md:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-muted-foreground mb-8">
                            Have questions, suggestions, or just want to say hello? I'd love to hear from you!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild>
                                <a href="mailto:alex@blogcraft.com">
                                    <Mail className="h-4 w-4 mr-2" />
                                    Send Email
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="https://twitter.com" target="_blank">
                                    <Twitter className="h-4 w-4 mr-2" />
                                    Follow on Twitter
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </RootLayout>
    )
}
