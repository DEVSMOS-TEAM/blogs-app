import type React from "react"

import { useState } from "react"
import { CalendarIcon, ImageIcon, UserIcon, BookOpenIcon, ClockIcon, HashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function CreateBlog() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const [currentTag, setCurrentTag] = useState("")
    const [status, setStatus] = useState("draft")
    const [featuredImage, setFeaturedImage] = useState("")

    const handleAddTag = () => {
        if (currentTag.trim() && !tags.includes(currentTag.trim())) {
            setTags([...tags, currentTag.trim()])
            setCurrentTag("")
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleAddTag()
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({
            title,
            content,
            author,
            category,
            tags,
            status,
            featuredImage,
        })
    }

    const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0
    const readTime = Math.ceil(wordCount / 200)

    return (
        <div className="min-h-screen bg-orange-50">
            {/* Header */}
            <header className="bg-white border-b-2 border-orange-200">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-500 p-3 rounded-lg">
                                <BookOpenIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Article Editor</h1>
                                <p className="text-gray-600">Create and publish your story</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent">
                                Save Draft
                            </Button>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Publish Article</Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden">
                                {/* Article Header */}
                                <div className="p-8 border-b border-orange-100">
                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                                                Article Title
                                            </Label>
                                            <Input
                                                id="title"
                                                placeholder="Write a compelling headline..."
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="text-2xl font-bold border-0 bg-transparent p-0 h-auto focus-visible:ring-0 placeholder:text-gray-400"
                                                required
                                            />
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <UserIcon className="h-4 w-4" />
                                                <span>By</span>
                                                <Input
                                                    placeholder="Author name"
                                                    value={author}
                                                    onChange={(e) => setAuthor(e.target.value)}
                                                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 font-medium text-gray-700"
                                                    required
                                                />
                                            </div>
                                            <Separator orientation="vertical" className="h-4" />
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="h-4 w-4" />
                                                <span>
                          {new Date().toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          })}
                        </span>
                                            </div>
                                            <Separator orientation="vertical" className="h-4" />
                                            <div className="flex items-center gap-2">
                                                <ClockIcon className="h-4 w-4" />
                                                <span>{readTime} min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Editor */}
                                <div className="p-8">
                                    <Label htmlFor="content" className="text-sm font-medium text-gray-700 mb-4 block">
                                        Article Content
                                    </Label>
                                    <Textarea
                                        id="content"
                                        placeholder="Tell your story... Write with passion and let your ideas flow naturally."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className="min-h-[500px] border-0 bg-transparent p-0 text-base leading-7 focus-visible:ring-0 resize-none placeholder:text-gray-400"
                                        required
                                    />
                                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                                        <span>{content.length} characters</span>
                                        <span>{wordCount} words</span>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image Section */}
                            <div className="mt-8 bg-white rounded-lg shadow-sm border border-orange-100 p-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <ImageIcon className="h-5 w-5 text-orange-500" />
                                        <h3 className="text-lg font-semibold text-gray-900">Featured Image</h3>
                                    </div>

                                    <div>
                                        <Label htmlFor="image-url" className="text-sm font-medium text-gray-700 mb-2 block">
                                            Image URL
                                        </Label>
                                        <Input
                                            id="image-url"
                                            placeholder="https://example.com/image.jpg"
                                            value={featuredImage}
                                            onChange={(e) => setFeaturedImage(e.target.value)}
                                            className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                                        />
                                    </div>

                                    {featuredImage && (
                                        <div className="border border-orange-200 rounded-lg overflow-hidden">
                                            <img
                                                src={featuredImage || "/placeholder.svg?height=300&width=600"}
                                                alt="Featured image preview"
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Publishing Options */}
                            <Card className="border-orange-100 shadow-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg text-gray-900">Publishing</CardTitle>
                                    <CardDescription>Configure your article settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="status" className="text-sm font-medium text-gray-700">
                                            Status
                                        </Label>
                                        <Select value={status} onValueChange={setStatus}>
                                            <SelectTrigger className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="draft">📝 Draft</SelectItem>
                                                <SelectItem value="published">🌟 Published</SelectItem>
                                                <SelectItem value="scheduled">⏰ Scheduled</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                                            Category
                                        </Label>
                                        <Select value={category} onValueChange={setCategory}>
                                            <SelectTrigger className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="technology">Technology</SelectItem>
                                                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                                                <SelectItem value="business">Business</SelectItem>
                                                <SelectItem value="health">Health & Wellness</SelectItem>
                                                <SelectItem value="travel">Travel</SelectItem>
                                                <SelectItem value="food">Food & Cooking</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="publish-date" className="text-sm font-medium text-gray-700">
                                            Publish Date
                                        </Label>
                                        <Input
                                            id="publish-date"
                                            type="datetime-local"
                                            className="mt-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tags */}
                            <Card className="border-orange-100 shadow-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                                        <HashIcon className="h-4 w-4" />
                                        Tags
                                    </CardTitle>
                                    <CardDescription>Add relevant tags to help readers find your content</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Enter a tag"
                                            value={currentTag}
                                            onChange={(e) => setCurrentTag(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                                        />
                                        <Button
                                            type="button"
                                            onClick={handleAddTag}
                                            size="sm"
                                            className="bg-orange-500 hover:bg-orange-600"
                                        >
                                            Add
                                        </Button>
                                    </div>

                                    {tags.length > 0 && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">Current tags:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {tags.map((tag, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer border border-orange-200"
                                                        onClick={() => handleRemoveTag(tag)}
                                                    >
                                                        {tag} ×
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Article Stats */}
                            <Card className="border-orange-100 shadow-sm bg-orange-50">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg text-gray-900">Article Statistics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                                            <div className="text-2xl font-bold text-orange-600">{wordCount}</div>
                                            <div className="text-sm text-gray-600">Words</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                                            <div className="text-2xl font-bold text-orange-600">{readTime}</div>
                                            <div className="text-sm text-gray-600">Min Read</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                                            <div className="text-2xl font-bold text-orange-600">{tags.length}</div>
                                            <div className="text-sm text-gray-600">Tags</div>
                                        </div>
                                        <div className="bg-white rounded-lg p-4 border border-orange-200">
                                            <div className="text-2xl font-bold text-orange-600">{title.length}</div>
                                            <div className="text-sm text-gray-600">Title Chars</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Author Info */}
                            <Card className="border-orange-100 shadow-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-lg text-gray-900">Author Profile</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src="/placeholder-user.jpg" />
                                            <AvatarFallback className="bg-orange-100 text-orange-700">
                                                {author.charAt(0).toUpperCase() || "A"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-gray-900">{author || "Author Name"}</p>
                                            <p className="text-sm text-gray-500">Content Creator</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
