"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Upload } from "lucide-react"

interface AvatarUploadProps {
    onImageChange?: (file: File | null) => void
}

export default function AvatarUpload({ onImageChange }: AvatarUploadProps) {
    const [preview, setPreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            // Create preview URL
            const previewUrl = URL.createObjectURL(file)
            setPreview(previewUrl)
            onImageChange?.(file)
        }
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemove = () => {
        setPreview(null)
        onImageChange?.(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="relative">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={preview || undefined} alt="Profile picture" />
                    <AvatarFallback className="text-lg">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                {preview && (
                    <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                        onClick={handleRemove}
                    >
                        ×
                    </Button>
                )}
            </div>

            <div className="flex flex-col items-center space-y-2">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleButtonClick}
                    className="flex items-center space-x-2 bg-transparent"
                >
                    <Upload className="h-4 w-4" />
                    <span>{preview ? "Change Photo" : "Upload Photo"}</span>
                </Button>
                <p className="text-xs text-muted-foreground text-center">JPG, PNG or GIF (max. 5MB)</p>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                name="avatar"
            />
        </div>
    )
}
