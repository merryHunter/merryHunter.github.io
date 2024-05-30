---
author: "Ivan Chernukha"
title: "2024 Guide for Azure AI Engineer Certification (AI-102)"
date: 2024-05-29
description: "Sharing my learning on how to prepare for Azure certification more efficiently in 2024"
tags: ["azure", "certification", "tips"]
thumbnail: https://msdynamicsworld.com/sites/default/files/styles/400w/public/2023-12/sparkler-dark-background.jpg?itok=pQop5D9d_
---

---
I have been working with Azure for 10 months so far, then spent around 3 days of preparation, and passed with a score 854. During those days, I followed [Microsoft Learn AI Engineer Path](https://learn.microsoft.com/en-us/training/career-paths/ai-engineer), however I encourage everyone to go one step deeper in order to pass exam successfully. Here are my tips on how to be more prepared and what you **should do during the exam**.
{{ template "_internal/google_analytics.html" . }}
![Exam meme](https://images3.memedroid.com/images/UPLOADED459/5a8c203728861.jpeg)

### Tip 1: Start from exam readiness zone

Identify gaps in your knowledge of AI Services with [Exam prep video series](https://learn.microsoft.com/en-us/shows/exam-readiness-zone/preparing-for-ai-102-plan-and-manage-an-azure-ai-solution). They provide comprehensive overview of topics covered in the exam, giving you an idea which are you may want to improve first, before even taking practice tests. Also, I found practice tests to be not as close to real exams and have repeated questions, so although target to have at least 80%, there is not much to learn from them after passing 2 times.

### Tip 2: Review FAQ sections

Every AI Service has FAQ section which contains valuable information about practical tips or instructions on how to use service under certain conditions. For instance, how to improve Language Understanding model if it throws too many false positives, or how to enable multiple language mode in Video Indexer, or which options to choose for training models.

### Tip 3: Pay attention to SDK and services JSON responses

Do expect different kind of questions during exam, not only completely theoretical!

At least skim through how to use Azure CLI for invoking AI Services, what fields are returned when you create AI Search Index, or how to AI Skills for Search via command interface, not only UI portal. Try to install a few packages for services to know which package is responsible for which service. I believe it is OK to take this exam if you haven't worked with particular service, and that's why try to do it for those services you worked least. 

### Tip 4: Most important - use Microsoft Learn during exam!

This is something you won't know unless you take the exam, but Microsoft actually lets you use reference documentation during the exam!

 And this comes extremely helpful. It does not mean you will easily find all answers, but it will certainly help you verify if you are doubtful about answers and fix mistakes. I recommend using it at the end of the exam for questions you mark "for review", and during case studies (as you cannot revisit them).
   
Last but not least, as Azure AI Services are rapidly evolving, pay attention to newly introduced services, like AI Content Safety.

Good luck at your exam!


<!-- {{< css.inline >}}
<style>
  .prose img {
    margin-left: 50px;
  }
  </style>
{{< /css.inline >}} -->
<!-- 
{{< highlight html >}}
.emoji {
font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}
<style>

.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
	font-size: 2rem;
	vertical-align: middle;
}
@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

 -->
