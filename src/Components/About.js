import React from 'react'

export default function About(props) {
  return (
    <div className="container mt-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h2>About Text Utils</h2>
      <p>
        Welcome to Text Utils, your one-stop solution for various text manipulation tasks.
        Whether you need to analyze, transform, or format text, we've got you covered.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Text Analysis:</strong> Gain insights into your text, such as word count, character count, and more.</li>
        <li><strong>Text Transformation:</strong> Easily convert text to uppercase, lowercase, or capitalize the first letter of each word.</li>
        <li><strong>Remove Duplicates:</strong> Eliminate duplicate lines or words from your text effortlessly.</li>
        {/* Add more features as needed */}
      </ul>

      <h3>How to Use</h3>
      <p>
        Using Text Utils is simple and intuitive. Just enter your text in the provided input area,
        choose the desired operation, and let us handle the rest. You can copy the result to your clipboard for convenience.
      </p>

      <h3>Feedback</h3>
      <p>
        We value your feedback! If you have any suggestions or encounter issues while using Text Utils,
        please don't hesitate to reach out to us. Your input helps us improve and provide a better user experience.
      </p>

      <p>
        Thank you for choosing Text Utils. We hope it simplifies your text-related tasks and enhances your productivity.
      </p>
    </div>
  )
}
