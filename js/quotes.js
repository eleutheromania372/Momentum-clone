const quotes = [
    {
      quote: "When I found out the patriarchy wasn't about horses, I lost interest anyway.",
      author: "Ken",
    },
    {
      quote: "Ask your mother.",
      author: "The Narrator",
    },
    {
      quote: "Do you guys ever think about dying?",
      author: "Stereotypical Barbie",
    },
    {
      quote: "Thanks to Barbie, all problems of feminism have been solved.",
      author: "The Narrator",
    },
    {
      quote: "You've been making women feel bad about themselves since you were invented.",
      author: "Sasha",
    },
    {
      quote: "That's life. It's all change.",
      author: "Gloria",
    },
    {
      quote: "It is literally impossible to be a woman.",
      author: "Gloria",
    },
    {
      quote: "We mothers stand still so our daughters can look back and see how far they have come.",
      author: "Ruth Handler",
    },
    {
      quote: "Humans only have one ending. Ideas live forever.",
      author: "Ruth Handler",
    },
    {
      quote: "Barbie is all these women. And all these women are Barbie.",
      author: "There are no multiples of Allan. He’s just Allan.”",
    },
    {
      quote: "Yeah, because actually my job, it’s just Beach.",
      author: "Ken",
    },
    {
      quote: "Barbie has a great day every day, but Ken only has a great day if Barbie looks at him.",
      author: "The Narrator",
    },
    {
      quote: "Barbie has a great day every day, but Ken only has a great day if Barbie looks at him.",
      author: "Sasha",
    },
    {
      quote: "There are no multiples of Allan. He’s just Allan.",
      author: "The Narrator",
    },
    {
      quote: "I’m trained to stand confidently here.",
      author: "Ken",
    },
    {
      quote: "It is the best day ever. So was yesterday, and so is tomorrow, and every day from now until forever.",
      author: "Barbie",
    },
    {
      quote: "Don’t blame me, blame Mattel. I don’t care.",
      author: "Weird Barbie",
    },
    {
      quote: "Don’t blame me, blame Mattel. I don’t care.",
      author: "Barbie",
    },
    {
      quote: "Don’t blame me, blame Mattel. I don’t care.",
      author: "Ken",
    }
  ];
  

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*(quotes.length))];

quote.innerText = todayQuote.quote;
author.innerText = "\n"+todayQuote.author;