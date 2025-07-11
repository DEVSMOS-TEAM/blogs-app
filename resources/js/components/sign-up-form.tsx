"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AvatarUpload from "@/components/ui/avatae-upload"
import { Link } from '@inertiajs/react';

import { z } from "zod"
import { Inertia } from '@inertiajs/inertia';

const formSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
    bio: z.string().optional(),
    provider_image_url: z.string().optional(),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export default function SignUpForm() {
    const [avatarFile, setAvatarFile] = useState<File | null>(null)
    const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)


        // Gather the data for Zod validation
        const data = {
            first_name: formData.get("first_name") as string,
            last_name: formData.get("last_name") as string,
            username: formData.get("username") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            password_confirmation: formData.get("password_confirmation") as string,
            bio: formData.get("bio") as string || undefined,
            provider_image_url: undefined, // we add file later
        }

        // Validate with Zod
        const result = formSchema.safeParse(data)

        formSchema.safeParse(data)

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors
            setFormErrors(errors)
            return
        }

        if (avatarFile && !["image/jpeg", "image/png", "image/webp"].includes(avatarFile.type)) {
            setFormErrors({avatar: ["Please upload a JPEG, PNG, or WebP image."]})
            return
        }

        setFormErrors({})

        // Add avatar file if present
        if (avatarFile) {
            formData.append("provider_image_url", avatarFile)
        }

        // Submit with Inertia
        Inertia.post('/auth/register', formData, {
            forceFormData: true,
            onSuccess: () => console.log('Success'),
            onError: ( ) => console.log('Error'),
            onFinish: () => console.log('Request finished'),
        })
    }

    return (
        <div className="flex items-center justify-center px-4 py-8">
            <Card className="w-full max-w-md rounded-xl">
                <CardHeader className="space-y-1 pt-8 rounded-xl">
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">Enter your information to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Avatar Upload Section */}
                        <div className="flex justify-center">
                            <AvatarUpload onImageChange={setAvatarFile} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" name="first_name" placeholder="John" required />
                                {
                                    formErrors.firstName && (
                                        <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                                    )
                                }
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" name="last_name" placeholder="Doe" required />
                                {
                                    formErrors.lastName && (
                                        <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" name="username" type="text" placeholder="@username" required />
                            {
                                formErrors.username && (
                                    <p className="text-red-500 text-sm">{formErrors.username}</p>
                                )
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                            {
                                formErrors.email && (
                                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                                )
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" placeholder="Create a strong password" required />
                            {
                                formErrors.password && (
                                    <p className="text-red-500 text-sm">{formErrors.password}</p>
                                )
                            }
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password_confirmation">Confirm password</Label>
                            <Input
                                id="confirmPassword"
                                name="password_confirmation"
                                type="password"
                                placeholder="Confirm your password"
                                required
                            />
                            {
                                formErrors.confirmPassword && (
                                    <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>
                                )
                            }
                        </div>
                        <Button type="submit" className="w-full">
                            Create account
                        </Button>
                    </form>
                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-primary hover:underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
