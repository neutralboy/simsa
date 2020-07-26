export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log(req.query);
    res.end(JSON.stringify({ name: 'John Doe' }))
}