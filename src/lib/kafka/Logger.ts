export default function Logger(...data) {
    const isProd = process.env.NODE_ENV === 'production'
    // if (!isProd){
    console.log(...data)
    // }
}