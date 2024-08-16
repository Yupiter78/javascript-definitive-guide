## Histogram

This program calculates the frequency of each character in the input text and displays a histogram showing the distribution of characters based on their occurrence frequency.

### Classes
1. **DefaultMap**
    - Extends `Map` to provide a default value when a key is not found.
    - Method `get(key)`: Returns the value for the specified key, or the default value if the key is not found.

2. **Histogram**
    - Main class that calculates character frequencies and generates a histogram.
    - Constructor: Initializes `letterCounts` with a `DefaultMap` instance and `totalLetters` counter.
    - Method `add(text)`: Processes the input text, updates character frequencies, and increments the total letter count.
    - Method `toString()`: Generates a histogram representation based on character frequencies.

### Usage
1. Run the program.
2. Enter text.
3. To complete input and view the histogram, enter "end".

The program will calculate the character frequencies from the input text and display a histogram showing the distribution of characters based on their occurrence percentage.