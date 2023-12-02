const quoteElement = document.getElementById('quote');
    const quotes = [
      '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela',
      '“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill',
      '“In the middle of difficulty lies opportunity.” - Albert Einstein'
    ];


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;