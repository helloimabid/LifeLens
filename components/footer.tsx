import Link from "next/link"
import { Github, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-green-500" />
            <span className="text-sm text-muted-foreground">LifeLens - Your AI-powered healthcare companion</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Developed by</span>
            <Link
              href="https://github.com/helloimabid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 font-medium text-primary hover:underline transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Sadman Abid</span>
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t text-center text-xs text-muted-foreground">
          <p>
            This platform provides health information for educational purposes only. Always consult with qualified
            healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
