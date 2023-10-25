//api/status
function status(request, response) {
  response.status(200).json({ chave: "está funcionando óhj!" });
}

export default status;
