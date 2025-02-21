import { cn } from "@/lib/utils"
import React from "react"

interface Props {
  children: React.ReactNode
	className: string
}

export default function MyContainer({ children, className }: Props) {
  return <div className={cn("container mx-auto", className)}>{children}</div>
}
