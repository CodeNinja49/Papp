import React from "react";
import { findAll } from "highlight-words-core";

export default function Highlighter({
  textToHighlight = "",
  searchWords = [],
}) {
  const keywords = searchWords.reduce((newArr, word) => {
    const words = word.text.split(",").map((t) => t.trim());
    for (var i = 0; i < words.length; i++) {
      newArr.push({ text: words[i], className: word.className });
    }
    return newArr;
  }, []);

  const textArr = keywords.map((k) => k.text);
  const chunks = findAll({
    caseSensitive: false,
    searchWords: textArr,
    textToHighlight,
  });
  return chunks.map((chunk) => {
    const { end, highlight, start } = chunk;
    const text = textToHighlight.substr(start, end - start);
    const selected = keywords.filter(
      (w) => w.text.toLowerCase() === text.toLowerCase()
    );
    const highlightClass = selected.length ? selected[0].className : "";
    if (highlight) {
      return <span className={highlightClass}>{text}</span>;
    } else {
      return text;
    }
  });
}
