export const fetchResponse =  async(chat) => {
  try {
      // BEFORE deployment 'http://localhost:3080'
      // after deployment 'https://french-chat-gpt-full-stack.vercel.app/'
      const response = await fetch('https://french-chat-gpt-full-stack.vercel.app/', { 
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              message: chat.map((message)=> message.message).join(" \n ")
          })
      })

      const data = await response.json()
      return data
  } catch (error) {
      console.log(error);
  }
}
