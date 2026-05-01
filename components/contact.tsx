"use client"

import { useState } from "react"
import { Mail, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-pretty">
            Have questions or want to work with us? Reach out and we&apos;ll get back 
            to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            <div className="p-5 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-sm text-muted-foreground">contact@basicdevs.com</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border border-border bg-background">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm">Discord</p>
                  <p className="text-sm text-muted-foreground">Join our community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
