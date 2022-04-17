import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const courses = [
        {id: 1, name: 'NextJS with Typescript'},
        {id: 2, name: 'ReacJS with Typescript'},
        {id: 3, name: 'React Native with Typescript'},
        {id: 4, name: 'NodeJS with Typescript'}
    ]

    return response.json(courses)
}