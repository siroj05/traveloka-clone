'use client'

import { DataUserModel } from "./navbar"
import { CircleUserRound, ChevronDown, UserRound, Gift, CreditCard, ClipboardList, Calendar, RotateCcw, Bell, Users, Mail, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface Props {
  dataUser: DataUserModel
  setDataUser: (value : DataUserModel) => void
}

export default function ProfileUser({ dataUser, setDataUser }: Props) {
  return (
    <div className="my-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 border p-2 rounded-xl hover:bg-sky-900">
            <CircleUserRound className="bg-primary text-white border border-gray-700 rounded-full" />
            {dataUser.username} | 30030 Points
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72" align="end">
          <div className="bg-gray-400 mb-3 text-white">
            <div className="p-4 pb-2">
              <h3 className="font-semibold text-lg">Siroj juddin</h3>
              <p className="text-sm">You're our Silver Priority</p>
            </div>
          </div>
            <div className="px-4 pb-3">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-blue-500 grid place-items-center">
                  <div className="size-3 text-xs text-white">P</div>
                </div>
                <span>3,135 Points</span>
              </div>
            </div>
          <DropdownMenuSeparator />
          <div className="p-2 font-semibold">
            <DropdownMenuItem>
              <UserRound className="mr-2 size-4 text-primary" />
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Gift className="mr-2 size-4 text-primary" />
              Reward Zone
              <Badge variant="secondary" className="ml-auto bg-yellow-300 text-yellow-900">
                New!
              </Badge>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="mr-2 size-4 text-primary" />
              My Cards
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ClipboardList className="mr-2 size-4 text-primary" />
              Purchase List
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="mr-2 size-4 text-primary" />
              My Booking
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RotateCcw className="mr-2 size-4 text-primary" />
              Refund
              <Badge variant="secondary" className="ml-auto bg-yellow-300 text-yellow-900">
                New!
              </Badge>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 size-4 text-primary" />
              Flight Price Alerts
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="mr-2 size-4 text-primary" />
              Saved Passenger Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mail className="mr-2 size-4 text-primary" />
              Promo Info
            </DropdownMenuItem>
            <DropdownMenuItem className="">
              <LogOut className="mr-2 size-4 text-primary" />
              <button onClick={() => setDataUser({username : '', success : false})}>
                Log Out
              </button>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

