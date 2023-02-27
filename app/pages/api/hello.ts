const hello = (req: any, res: any): any => {
  return res.status(200).json({ message: 'こんにちは' })
}

export default hello
