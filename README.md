## Gitium Chromoblockatics

A blocky game about pushing, pulling and merging (with a colorful twist).

![Title](http://rozifus.github.com/game-off-2012/img/title.png)

## Contents

- [Game](#game)
- [Controls](#controls)
- [Play!](#play)
- [Libraries Used](#libraries)
- [Licence](#licence)

<a name="game" />
## Game

- The objective of the game is to merge all the colored blocks together until only black blocks remain. 
- Different actions can be performed on blocks based on the hues they contain:
  - Yellow - Can be pushed
  - Red - Can be pulled
  - Blue - Can be ghosted (passed through)
  - Grey and Black - Can't do anything, other than get in your way!
- Be careful not to trap yourself or place the blocks into positions that you can't get them out of.
- If you do get stuck, you can refresh the page to reload the level :)


<a name="controls" />
## Controls

<table>
  <tr>
    <th>Action</th>
    <th>Key(s)</th>
    <th>Acts On</th>
  </tr>
  <tr>
    <th>Move</th>
    <td><code>Arrow</code></td>
    <td>Empty Space</td>
  </tr>
  <tr>
    <th>Push</th>
    <td><code>a</code> + <code>Arrow</code></td>
    <td>Yellow Hued Blocks</td>
  </tr>
  <tr>
    <th>Pull</th>
    <td><code>s</code> + <code>Arrow</code></td>
    <td>Red Hued Blocks</td>
  </tr>
  <tr>
    <th>Ghost</th>
    <td><code>Arrow</code></td>
    <td>Blue Hued Blocks</td>
  </tr>
  <tr>
    <th>Move Camera</th>
    <td><code>f</code> + <code>Arrow</code></td>
    <td>The Whole Map</td>
  </tr>
</table>

<a name="play" />
## Play!

```Note: Depending on computer and network, levels may take up to 20 seconds to load. (But in most cases will be much quicker).```

### Level 1 - [(Play)](http://rozifus.github.com/game-off-2012/one.html)

<a href="http://rozifus.github.com/game-off-2012/one.html">![Level One](http://rozifus.github.com/game-off-2012/img/one.png)</a>

### Level 2 - [(Play)](http://rozifus.github.com/game-off-2012/two.html)

<a href="http://rozifus.github.com/game-off-2012/two.html">![Level Two](http://rozifus.github.com/game-off-2012/img/two.png)</a>

<a name="libraries" />
## Libraries Used
* [Three.js](https://github.com/mrdoob/three.js/) - The very awesome javascript game library.
* [(BKCore) Three.js-extensions](https://github.com/BKcore/Three.js-extensions/) - Nifty extensions for three.js.
* [HexGL](https://github.com/BKcore/HexGL) - Very impressive HTML5 game. I used this as a starting point for Gitium Chromoblockatics and as a reference for how to do object oriented programming in javascript.

<a name="licence" />
## License

Unless specified in the file, Gitium Chromoblockatics' code and resources are licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.

To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
