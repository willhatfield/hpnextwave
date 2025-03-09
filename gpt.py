import torch
import torch.nn as nn
from transformers import GPT2LMHeadModel, GPT2Config, GPT2Tokenizer

class GPT(nn.Module):
    def __init__(self, model_name='gpt2', pretrained=True): 
        super(GPT, self).__init__() 
        self.tokenizer = GPT2Tokenizer.from_pretrained(model_name)
        self.config = GPT2Config.from_pretrained(model_name)
        if pretrained:
            self.model = GPT2LMHeadModel.from_pretrained(model_name)
        else:
            self.model = GPT2LMHeadModel(self.config)
        self.conversation_history = []

    def forward(self, input_ids, attention_mask=None, labels=None):
        return self.model(input_ids, attention_mask=attention_mask, labels=labels)

    def generate(self, input_text, max_length=50):
        self.conversation_history.append(input_text)
        input_text = " ".join(self.conversation_history)
        input_ids = self.tokenizer.encode(input_text, return_tensors='pt')
        attention_mask = torch.ones(input_ids.shape, dtype=torch.long)  # Create attention mask
        output = self.model.generate(input_ids, attention_mask=attention_mask, max_length=max_length, pad_token_id=self.tokenizer.eos_token_id)
        response = self.tokenizer.decode(output[0], skip_special_tokens=True)
        self.conversation_history.append(response)
        return response

    def perplexity(self, input_text):
        input_ids = self.tokenizer.encode(input_text, return_tensors='pt')
        loss = self.model(input_ids, labels=input_ids)[0]
        return torch.exp(loss)

    def save(self, path):
        torch.save(self.model.state_dict(), path)

    def load(self, path):
        self.model.load_state_dict(torch.load(path))
        self.model.eval()

    def reset_conversation(self):
        self.conversation_history = []

# Usage
def main():
    model = GPT()
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['exit', 'quit']:
            break
        response = model.generate(user_input, max_length=50)
        print("Bot:", response)

if __name__ == "__main__":
    main()