<div align="center">
	<br/>
	<p>
    <a href="https://mavlina-api.sazgal.repl.co/"><img src="https://images-ext-1.discordapp.net/external/RUpxoXQFufqZ1zj-7k1dwBW10DlyOxfmUAdlNMnHTQc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/893227445489127444/4a38b1d21fa9fe04fcb9b467ab5dfbcd.png?width=100&height=100"  alt="Mavlina" /></a>
    </p>
    <br/>
    
<p>
    
<a href="https://discord.gg/KCfmGuM27e"><img src="https://img.shields.io/discord/810116763639087124?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/mavlina"><img src="https://img.shields.io/npm/v/mavlina.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/mavlina"><img src="https://img.shields.io/npm/dt/mavlina.svg?maxAge=3600" alt="npm downloads" /></a>
        <br/>
        [![NPM](https://nodei.co/npm/mavlina.png)](https://nodei.co/npm/mavlina/)
	</p>

</div>


## About

Mavlina is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Mavlina's API](https://discord.com/developers/docs/intro).

- Easy to use
- Lightweight
- Object-oriented
- Performant

## Installation

**Node.js 16.9.0 or newer is required.**

```sh-session
npm install mavlina
yarn add mavlina
pnpm add mavlina
```

## Example
```js
const Mavlina = require("mavlina")


async function call() {
    const mavlina = new Mavlina()
    
    const facts = await mavlina.facts()
    console.log(facts)
    
    const wyr = await mavlina.wyr()
    console.log(wyr)

    const truth = await mavlina.truth("normal")
    console.log(truth)
    
    const dare = await mavlina.dare()
    console.log(dare)

    const randomtnd = await mavlina.randomtnd("normal")
    console.log(randomtnd)

    const nhie = await mavlina.nhei("nsfw")
    console.log(nhie)
}
call()
```
