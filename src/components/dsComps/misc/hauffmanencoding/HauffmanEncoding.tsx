import { FC } from "react";
import Template, { LLSectionTemplate } from "../../Template";
import HauffmanEncodingAnimation from "./HauffmanEncodingAnimation";

interface ITOH {}

const HauffmanEncoding: FC<ITOH> = () => {
  return (
    <Template
      title="Hauffman Encoding"
      intro="Huffman coding is a lossless data compression algorithm. The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters."
    >
      <LLSectionTemplate>
        <HauffmanEncodingAnimation />
      </LLSectionTemplate>
    </Template>
  );
};

export default HauffmanEncoding;
