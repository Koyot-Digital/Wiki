## ONPS Wiki

>[!WARNING]
>we are moveing over to Svelte (a very nice framework) soon, if posible please wait before adding anything that is not needed, only minor changes will be approved, and no changes will be made from contributors as we move forward with the migration

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Koyot-Digital/Wiki?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/Koyot-Digital/Wiki?style=for-the-badge)


Hey there! Thanks for wanting to improve the Oakridge Nuclear Power Station wiki. This guide will show you the important stuff and help you to contribute without accidentally breaking anything important.

## 🎯 Quick Start

Before attempting anything, let us brief you. This wiki is basically a knowledge base for nuclear power station procedures, and we want to keep it accurate and helpful for everyone who uses it. Don't worry though as the contributing is pretty straightforward once you know what's what.

## 📂 What You Can (and Can't) Touch

To maximise the chances of your PR being accepted, only modify the files you're permitted to. Think of it as a shared workspace where organisation matters.

### 🟢 Safe to Edit

**Content Pages:**
- `index.html` - This is your main landing page with all the navigation links
- `prestart.html`, `startup.html`, `shutdown.html` - The actual procedure pages that people come here to read
- Any other HTML files that follow the same pattern

**Images:**
- Anything in the `images/` folder - just make sure you're using `.webp` files
- Keep images related to the game and make sure they're not huge file sizes

**Styling:**
- `style.css` - Feel free to improve the layout or fix broken styles, but try not to completely redesign everything. Just make sure to notify @ShrimpQuack of the change.

### 🔴 Hands Off (For Now)

**Core Scripts:**
- `script.js` - This handles important functionality, so ping @ShrimpQuack before you mess with it
- `Middleware.js` - This is routing stuff that keeps the site working properly, if you touch it in your PR there is a 99.9% chance it will be rejected

**Structure:**
- Don't rearrange the header or footer components
- Avoid adding random scripts or plugins without talking to someone first
- Don't delete files unless you're really sure about it

## New to GitHub?


This XKCD comic humourously explains Git in a simple way.
![XKCD 1597](https://imgs.xkcd.com/comics/git.png)

Git can be quite complex, but don’t worry because you can figure it out. To understand terms like `push`, `fetch`, and `pull`, @Gargleblaster recommends reading [this article](https://webtuu.com/blog/04/a-laymans-introduction-to-git).

Once you’ve read that, you should have a good grasp of basic Git concepts. To learn how to contribute, see the [How To Contribute For Dummies](docs/GITHUB-FOR-DUMMIES.md) file. For guidelines, refer to the section below.

## ✏️ Contributing Guidelines

For the contributing guidelines, check out the [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📖 Writing Guidelines

Good writing makes all the difference when people are trying to learn procedures or find information quickly. Some guidelines are below.

### 🎯 Voice and Style

* **Talk Directly to the Reader:**
Use "you" when writing instructions. Instead of "operators should check the pressure," write "you should check the pressure." This makes guides feel more personal.

* **Keep It Conversational:**
You don't need to sound like a textbook. Professional doesn't mean boring. Write like you're explaining something to a colleague who's standing right next to you.

### 🏷️ Formatting Standards

* **Headers and Titles:**
Use Title Case for headings (like "Pre-Start Guide" or "Emergency Situations"). This keeps everything looking consistent and makes navigation easier.

* **Break Things Up:**
Long walls of text are hard to read, especially when someone's trying to follow a procedure or act fast. Use shorter paragraphs and break up complex ideas into chunks.

* **Technical Terms:**
When you use terminology, give a quick explanation or context. Not everyone has the same level of experience, and a brief clarification can save someone A LOT of confusion. Don't just say ECCS, give a meaning or a link to a page with meaning!

## 🆘 Getting Help

Stuck on something? Everyone needs help sometimes, and there are a few ways to get unstuck.

### 🏷️ Where to Ask

**Technical Issues:**
If you're having trouble with the code side of things, open an Issue in the repository or reach out to @ShrimpQuack on Discord. Be specific about what you're trying to do and what's going wrong.

**Content Questions:**
Not sure if your changes fit the site's goals? Ask! Open an Issue and ask. It's better to check than to spend time on something that might not work out.

### 🏷️ Common Gotchas

**HTML Syntax:**
If you're new to editing HTML, focus on changing the text content rather than the structural tags. When in doubt, look at how similar content is formatted on other pages, if you want to actualy use tags, @gargleblaster-RMBK has made a helpful page to learn HTML at [https://gargleblaster-rbmk.github.io/](https://gargleblaster-rbmk.github.io/)

**Image Problems:**
Remember that only `.webp` files work, and they should be compressed to keep the site loading quickly. Large image files can make pages painfully slow to load.

## License

This project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).
