import { getServerSession  } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import {NextApiRequest ,  NextApiResponse} from "next";
export default async function handler(req : NextApiRequest, res: NextApiResponse){
    const session = await getServerSession(req, res, authOptions)

    res.status(200).send({session: session})
}

