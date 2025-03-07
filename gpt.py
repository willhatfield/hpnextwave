import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader

class SimpleTransformer(nn.Module):
    def __init__(self, vocab_size, d_model, nhead, num_encoder_layers, num_decoder_layers, dim_feedforward, max_seq_length):
        super(SimpleTransformer, self).__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.positional_encoding = nn.Parameter(torch.zeros(1, max_seq_length, d_model))
        self.transformer = nn.Transformer(d_model, nhead, num_encoder_layers, num_decoder_layers, dim_feedforward)
        self.fc_out = nn.Linear(d_model, vocab_size)

    def forward(self, src, tgt):
        src = self.embedding(src) + self.positional_encoding[:, :src.size(1), :]
        tgt = self.embedding(tgt) + self.positional_encoding[:, :tgt.size(1), :]
        output = self.transformer(src, tgt)
        return self.fc_out(output)

class TextDataset(Dataset):
    """
    A custom dataset class for handling text data.

    Args:
        text (str): The input text data.
        tokenizer (PreTrainedTokenizer): The tokenizer to convert text to token IDs.
        block_size (int): The maximum sequence length.

    Limitations:
        - The tokenizer should be compatible with the text data provided.
        - The block_size should be appropriate for the model being used.
        - Padding and truncation are applied to ensure all sequences are of the same length.
    """
    def __init__(self, text, tokenizer, block_size):
        self.examples = tokenizer(text, return_tensors='pt', max_length=block_size, truncation=True, padding='max_length').input_ids

    def __len__(self):
        return len(self.examples)

    def __getitem__(self, idx):
        return self.examples[idx]
def train_model(model, dataloader, optimizer, criterion, num_epochs):
    model.train()
    for epoch in range(num_epochs):
        for batch in dataloader:
            optimizer.zero_grad()
            if batch.dim() == 2 and batch.size(1) > 1:
                src = batch[:, :-1]
                tgt = batch[:, 1:]
            else:
                raise ValueError("Batch tensor does not have the expected shape.")
            output = model(src, tgt)
            loss = criterion(output.view(-1, output.size(-1)), tgt.view(-1))
            loss.backward()
            optimizer.step()
        print(f'Epoch {epoch+1}/{num_epochs}, Loss: {loss.item()}')
def generate_text(model, tokenizer, start_text, max_length):
    model.eval()
    output = model(generated, generated[:, -1].unsqueeze(1))
    input_ids = tokenizer(start_text, return_tensors='pt').input_ids
    generated = input_ids
    output = model(generated, generated)
    next_token = output[:, -1, :].argmax(dim=-1)
    generated = torch.cat((generated, next_token.unsqueeze(0)), dim=1)
    return tokenizer.decode(generated[0], skip_special_tokens=True)

def main():
    # Hyperparameters
    vocab_size = 30522  # Example vocab size
    d_model = 512
    nhead = 8
    num_encoder_layers = 6
    num_decoder_layers = 6
    dim_feedforward = 2048
    max_seq_length = 128
    num_epochs = 3
    batch_size = 4
    learning_rate = 1e-4

    # Tokenizer (using a proper tokenizer from transformers library)
    from transformers import BertTokenizerFast
    tokenizer = BertTokenizerFast.from_pretrained('bert-base-uncased')

    # Example text data
    text_data = "This is an example text for training the transformer model."

    # Create dataset and dataloader
    dataset = TextDataset(text_data, tokenizer, max_seq_length)
    dataloader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

    # Initialize model, optimizer, and loss function
    model = SimpleTransformer(vocab_size, d_model, nhead, num_encoder_layers, num_decoder_layers, dim_feedforward, max_seq_length)
    optimizer = optim.Adam(model.parameters(), lr=learning_rate)
    criterion = nn.CrossEntropyLoss()

    # Train the model
    train_model(model, dataloader, optimizer, criterion, num_epochs)

    # Generate text
    start_text = "This is"
    generated_text = generate_text(model, tokenizer, start_text, max_length=50)
    print("Generated Text: ", generated_text)

if __name__ == "__main__":
    main()