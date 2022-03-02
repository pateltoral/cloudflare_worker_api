const Location = async (request: Request) => {

  const init = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "content-type": "application/json",
    },
  }
  const response = await fetch(`https://freegeoip.app/json/`+request.headers.get("CF-Connecting-IP"), init)
  const results = await gatherResponse(response)
  const jsonobj = JSON.parse(results)
  return new Response(JSON.stringify(jsonobj.city))
}

async function gatherResponse(response: Response) {
  const { headers } = response
  const contentType = headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json())
  }
  else if (contentType.includes("application/text")) {
    return response.text()
  }
  else if (contentType.includes("text/html")) {
    return response.text()
  }
  else {
    return response.text()
  }
}

export default Location