import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function CardSign() {
  return (
    <Card className=" w-full md:w-1/2 text-white">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input className="placeholder-white" type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input className="placeholder-white"  type="password" id="password" placeholder="Enter your password" />
              {/* <input className="bg-black placeholder-white"  type="password" id="password" placeholder="Enter your password" /> */}

            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button  className="bg-[#8c3f93]">Submit</Button>
      </CardFooter>
    </Card>
  )
}

