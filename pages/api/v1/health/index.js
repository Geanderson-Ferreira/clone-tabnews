function status(request, response) {
  response.status(200).json({ status: "alive" });
}

export default status;
