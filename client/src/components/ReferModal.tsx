import { addreferral } from "@/api"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState } from "react"

export type Data = {
    refererEmail: String,
    refererName: String,
    refereeEmail: String,
    refereeName: String
}

export const ReferModal = () => {

    const data: Data = {
        refereeEmail: "",
        refereeName: "",
        refererEmail: "",
        refererName: "",
    }
    const [referralData, setReferralData] = useState(data)
    const sendClick = async () => {
        const { refereeEmail, refereeName, refererEmail, refererName } = referralData
        if (!refereeEmail || !refereeName || !refererEmail || !refererName) {
            alert("Some fields are empty")
            return false
        }
        try {

            const status = await addreferral(referralData)
            if (status?.data.status === "email not valid") {
                alert("email not valid")
                return false
            }
            if (status?.data.status === 'ok') {
                alert("message sent successfully")
            }
        }
        catch (error) {
            console.log(error)
        }

    }
    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Refer Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form >
                    <div className="grid gap-4 py-4">
                        <span> From: </span>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>

                            <Input
                                id="name"
                                placeholder="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setReferralData({ ...referralData, refererName: e.target.value })}
                                required

                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="emails"
                                type="email"
                                placeholder="peduarte@example.com"
                                className="col-span-3"
                                onChange={(e) => setReferralData({ ...referralData, refererEmail: e.target.value })}
                                required
                            />
                        </div>
                        <span> To: </span>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>

                            <Input
                                id="name"
                                placeholder="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setReferralData({ ...referralData, refereeName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="emails"
                                type="email"
                                placeholder="peduarte@example.com"
                                className="col-span-3"
                                onChange={(e) => setReferralData({ ...referralData, refereeEmail: e.target.value })}
                                required
                            />
                        </div>
                    </div>
                </form>

                <Button type="submit" onClick={sendClick}>Send</Button>

            </DialogContent>
        </Dialog>
    )
}
