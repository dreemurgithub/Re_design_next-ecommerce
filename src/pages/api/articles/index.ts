import type {NextApiRequest,NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const filepath = path.join(process.cwd(),'file','articles.json')
    const data = await fs.readFile(filepath,'utf8')

    res.status(200).send(data)
}
