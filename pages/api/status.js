function status(request, response) {
  response.status(200).json({ valor: "São sensacionais" });
}

export default status;
