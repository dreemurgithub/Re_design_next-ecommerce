import type {NextApiRequest, NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const { id } = req.query
    const filepath = path.join(process.cwd(),'file','articles.json')
    const data = await fs.readFile(filepath,'utf8')
    const data_all = JSON.parse(data)

    res.status(200).send(data_all[`${id}`])
}
