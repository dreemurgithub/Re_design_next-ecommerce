import type {NextApiRequest, NextApiResponse} from "next";
import {promises as fs} from 'fs';
import path from 'path';
import {json} from "stream/consumers";

export default async function handler(req:NextApiRequest, res: NextApiResponse){
    const {id} = req.query
    const filepath = path.join(process.cwd(),'file','products.json')
    const data = await fs.readFile(filepath,'utf8')
    const data_all = JSON.parse(data)
    let index = 0;
    for(let i = 0;i<data_all.length;i++) {
        if (id === data_all[i].id) index = i
    }
    res.status(200).send(data_all[index])
}
