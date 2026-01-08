import Contact from "../models/Contact.js"

export const createContact = async (req, res) => {
  const contact = await Contact.create(req.body)
  res.status(201).json(contact)
}

export const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 })
  res.json(contacts)
}

export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(updated)
}

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.json({ success: true })
}
