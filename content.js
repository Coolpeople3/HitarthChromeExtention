// Load NLP.js library and initialize a simple AI model
const script = document.createElement('script');
script.src = chrome.runtime.getURL('nlp.min.js');
document.head.appendChild(script);

script.onload = () => {
  const nlp = window.nlp;
  nlp.addCorpus([
    { intent: 'greet', utterances: ['hello', 'hi', 'hey'], answers: ['Hello! How can I help you?'] },
    { intent: 'goodbye', utterances: ['bye', 'see you'], answers: ['Goodbye!'] },
    { intent: 'search', utterances: ['what is *', 'tell me about *'], answers: ['Here’s what I found on that topic...'] }
  ]);

  nlp.train();

  const query = new URLSearchParams(window.location.search).get('q');
  nlp.process(query).then((response) => {
    const widgetContainer = document.createElement("div");
    widgetContainer.style.position = "fixed";
    widgetContainer.style.top = "20px";
    widgetContainer.style.right = "20px";
    widgetContainer.style.width = "300px";
    widgetContainer.style.padding = "15px";
    widgetContainer.style.backgroundColor = "#f8f8f8";
    widgetContainer.style.border = "1px solid #ccc";
    widgetContainer.style.borderRadius = "8px";
    widgetContainer.innerHTML = `<h4>AI Response</h4><p>${response.answer}</p>`;

    document.body.appendChild(widgetContainer);
  });
};
