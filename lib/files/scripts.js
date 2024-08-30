(function($){
	$(document).ready(function(){
		build();
		//equalHeightCards();
		$('.card:not(.section-title)').on('click', function(){
			$('#copied').remove();
			if ( $(this).hasClass('selected') ) {
				$('.selected').removeClass('selected');
			} else {
				$('.selected').removeClass('selected');
				$(this).toggleClass('selected');
				if ( $('#btnradio1').is(':checked') ) {
					navigator.clipboard.writeText($(this).children('.symbol').html());
					$(this).append('<div id="copied" style="position: absolute; top: 0; left: 0; bottom: 0; right: 0;">Copied!</div>');
					$('#copied').delay(500).animate({opacity: 0.01}, 750, function(){
						$(this).remove();
					});

				}
			}
		});
		$('.opt-group').on('click', function(){
			if ( $(this).hasClass('collapsed') ) {
				$(this).children('span:first-child').removeClass('btn-primary');
				$(this).children('span:first-child').addClass('btn-outline-primary');
				$(this).children('span:last-child').removeClass('btn-outline-primary');
				$(this).children('span:last-child').addClass('btn-primary');
			} else {
				$(this).children('span:first-child').addClass('btn-primary');
				$(this).children('span:first-child').removeClass('btn-outline-primary');
				$(this).children('span:last-child').addClass('btn-outline-primary');
				$(this).children('span:last-child').removeClass('btn-primary');
			}
			//equalHeightCards();
		});
		$('#opt-baseline-on').on('click', function(){
			$('.symbol').addClass('baseline');
		});
		$('#opt-baseline-off').on('click', function(){
			$('.symbol').removeClass('baseline');
		});
	});
})(jQuery);

/*

	let key = $(this).attr('id').substring(0,6);
	navigator.clipboard.writeText(key);
	$('.tooltip-inner').append('<div class="tooltip-inner" style="position: absolute; top: 0; left: 0; bottom: 0; right: 0;">Copied!</div>')

*/


function build() {
	let c = 0;
	for (let cat of cats) {

		if ( cat.subcats.length > 0 ) {
			for (let subcat of cat.subcats) {
				$('#data').append(`<div class="section-title col m-3 card border border-5 border-${colors[c]} bg-${colors[c]} collapse show" cat="${getCatName(subcat.id)}"><h3 class="fw-bold">${cat.name}: ${subcat.name}</h3></div></div>`);
				getChars(subcat.id, c);
			}
		} else {
			$('#data').append(`<div class="section-title col m-3 card border border-5 border-${colors[c]} bg-${colors[c]} collapse show" cat="${getCatName(cat.id)}""><h3 class="fw-bold">${cat.name}</h3></div></div>`);
			getChars(cat.id, c);
		}
		
		$('.topics').append(`<button id="cat-${(cat.name).toLowerCase()}-btn" class="filter-btn btn btn-${colors[c]} active" data-bs-toggle="button" onclick="$(this).next().trigger('click')">${cat.name}</button><div id="cat-${(cat.name).toLowerCase()}-trigger" class="visually-hidden" data-bs-target=".card[cat^='${(cat.name).toLowerCase()}']" data-bs-toggle="collapse" aria-expanded="true">${cat.name}</div>`);
		
		c++;
		if ( c == colors.length ) {
			c = 0;
		}
	}
}

function getChars(id, c) {
	for (let obj of data) {
		if ( obj.cat == id ) {
			let output = `<div class="col m-3 card border border-5 border-${colors[c]}-subtle bg-${colors[c]}-subtle collapse show" cat="${getCatName(id)}">`;
			//output += `<table class="table table-bordered table-${colors[c]} align-middle"><tbody><tr>`;
			output += `<p class="symbol">${obj.symbol}</p>`;
			output += `<p class="keys collapse"><span class="visually-hidden">PC Alt Keys</span><span>${obj.altkey}</span></p>`;
			//output += `</tr><tr>`;
			output += `<p class="term collapse">${obj.term}</p>`;
			//output += `</tr></tbody></table>`;
			output += `</div></div>`;

			$('#data').append(output);
		}
	}
}

var colors = [
	"primary",
	"secondary",
	"warning",
	"danger",
	"info",
	"success",
	"light"
]

var cats = [
	{	
		id: 0,
		name: "Misc",
		subcats: [],
	},{	
		id: 2,
		name: "Legal",
		subcats: [],
	},{	
		id: 3,
		name: "Currency",
		subcats: [],
	},{	
		id: 4,
		name: "Math",
		subcats: [{	
			id: 10,
			name: "Arithmetic",
		},{	
			id: 11,
			name: "Algebra",
		},{	
			id: 12,
			name: "Geometry",
		},{	
			id: 13,
			name: "Calculus",
		},{	
			id: 14,
			name: "Other",
		}]
	},{	
		id: 5,
		name: "Greek Letters",
		subcats: [],
	},{	
		id: 6,
		name: "Typography",
		subcats: [],
	},{	
		id: 7,
		name: "Latin",
		subcats: [{	
			id: 7,
			name: "Special Characters",
		},{	
			id: 8,
			name: "Enhanced Letters",
		}],
	},{	
		id: 16,
		name: "Geometric",
		subcats: [{	
			id: 15,
			name: "Arrows",
		},{	
			id: 1,
			name: "Shapes",
		},{	
			id: 9,
			name: "Box Drawings",
		}],
	}
];

var data = [
	// emoji
	{ cat: 0, altkey: "alt 1", symbol: "☺", term: ":), smile" },
	{ cat: 0, altkey: "alt 2", symbol: "☻", term: ":), smile" },
	{ cat: 0, altkey: "alt 3", symbol: "♥", term: "heart, playing card" },
	{ cat: 0, altkey: "alt 4", symbol: "♦", term: "diamond, playing card" },
	{ cat: 0, altkey: "alt 5", symbol: "♣", term: "club, playing card" },
	{ cat: 0, altkey: "alt 6", symbol: "♠", term: "spade, playing card" },
	{ cat: 0, altkey: "alt 11", symbol: "♂", term: "male, masculine" },
	{ cat: 0, altkey: "alt 12", symbol: "♀", term: "female, feminine" },
	{ cat: 0, altkey: "alt 13", symbol: "♪", term: "8th note, music" },
	{ cat: 0, altkey: "alt 14", symbol: "♫", term: "8th notes, music" },
	{ cat: 0, altkey: "alt 15", symbol: "☼", term: "sun, bright" },
	{ cat: 0, altkey: "alt 127", symbol: "⌂", term: "house" },

	// geometric
	{ cat: 1, altkey: "alt 249", symbol: "·", term: "bullet, middle dot" },
	{ cat: 1, altkey: "alt 250", symbol: "·", term: "bullet, middle dot" },
	{ cat: 1, altkey: "alt 7", symbol: "•", term: "bullet, middle dot" },
	{ cat: 1, altkey: "alt 8", symbol: "◘", term: "inverse, bullet, middle dot" },
	{ cat: 1, altkey: "alt 9", symbol: "○", term: "circle" },
	{ cat: 1, altkey: "alt 10", symbol: "◙", term: "inverse, circle" },
	{ cat: 1, altkey: "alt 22", symbol: "▬", term: "rectangle" },
	{ cat: 1, altkey: "alt 254", symbol: "■", term: "square" },

	{ cat: 15, altkey: "alt 24", symbol: "↑", term: "up, upward, arrow" },
	{ cat: 15, altkey: "alt 26", symbol: "→", term: "right, rightward, arrow, Z notation total function" },
	{ cat: 15, altkey: "alt 25", symbol: "↓", term: "down, downward, arrow" },
	{ cat: 15, altkey: "alt 27", symbol: "←", term: "left, leftward, arrow" },
	{ cat: 15, altkey: "alt 18", symbol: "↕", term: "up, down, vertical, arrow" },
	{ cat: 15, altkey: "alt 23", symbol: "↨", term: "up, down, vertical, arrow, with base" },
	{ cat: 15, altkey: "alt 29", symbol: "↔", term: "left, right, horizontal, arrow" },
	{ cat: 15, altkey: "alt 30", symbol: "▲", term: "up, upward, pointer, triangle" },
	{ cat: 15, altkey: "alt 16", symbol: "►", term: "right, rightward, pointer, triangle" },
	{ cat: 15, altkey: "alt 31", symbol: "▼", term: "down, downward, pointer, triangle" }, 
	{ cat: 15, altkey: "alt 17", symbol: "◄", term: "left, leftward, pointer, triangle" },

	// legal
	{ cat: 2, altkey: "alt 0153", symbol: "™", term: "tm, trade mark" },
	{ cat: 2, altkey: "alt 0169", symbol: "©", term: "copy, copyright" },
	{ cat: 2, altkey: "alt 0174", symbol: "®", term: "reg, registered" },

	// currency
	{ cat: 3, altkey: "alt 36", symbol: "$", term: "U.S., dollar, money" },
	{ cat: 3, altkey: "alt 0128", symbol: "€", term: "Europe, European Union, euro, money" },
	{ cat: 3, altkey: "alt 157, alt 0165", symbol: "¥", term: "Japan, yen, money" },
	{ cat: 3, altkey: "alt 156, alt 0163", symbol: "£", term: "United Kingdom, pound, sterling, money" },
	{ cat: 3, altkey: "alt 158", symbol: "₧", term: "Spain, peseta, money" },
	{ cat: 3, altkey: "alt 159, alt 0131", symbol: "ƒ", term: "florin currency symbol" },
	{ cat: 3, altkey: "alt 0164", symbol: "¤", term: "currency sign" },
	{ cat: 3, altkey: "alt 155, alt 0162", symbol: "¢", term: "cent, money" },


	// math
	{ cat: 10, altkey: "alt 43", symbol: "+", term: "plus" },
	{ cat: 10, altkey: "alt 45", symbol: "-", term: "minus" },
	{ cat: 10, altkey: "alt 241", symbol: "±", term: "plus minus" },
	{ cat: 10, altkey: "alt 42", symbol: "*", term: "multiplication" },
	{ cat: 10, altkey: "alt 0215", symbol: "×", term: "multiplication" },
	{ cat: 10, altkey: "alt 246, alt 0247", symbol: "÷", term: "division, obelus" },
	{ cat: 10, altkey: "alt 47", symbol: "/", term: "division" },

	{ cat: 10, altkey: "alt 61", symbol: "=", term: "equals" },
	{ cat: 10, altkey: "alt 240", symbol: "≡", term: "identical to" },
	{ cat: 10, altkey: "alt 247", symbol: "≈", term: "approximately, almost equal, asymptotic" },
	{ cat: 10, altkey: "alt 62", symbol: "&gt;", term: "greater than" },
	{ cat: 10, altkey: "alt 242", symbol: "≥", term: "greater equal" },
	{ cat: 10, altkey: "alt 60", symbol: "&lt;", term: "less than" },      
	{ cat: 10, altkey: "alt 243", symbol: "≤", term: "lesser equal" },
	
	{ cat:12, altkey: "alt 239", symbol: "∩", term: "intersection" },
	{ cat:12, altkey: "alt 248", symbol: "°", term: "degree" },
	{ cat:12, altkey: "alt 28", symbol: "∟", term: "right angle" },
	
	{ cat: 11, altkey: "alt 159, alt 0131", symbol: "ƒ", term: "function symbol" },
	
	{ cat: 13, altkey: "alt 244", symbol: "⌠", term: "top half integral" },
	{ cat: 13, altkey: "alt 245", symbol: "⌡", term: "bottom half integral" },

	{ cat: 11, altkey: "alt 252", symbol: "ⁿ", term: "superscript n, nth power" },
	{ cat: 11, altkey: "alt 0178", symbol: "²", term: "superscript 2, squared" },
	{ cat: 11, altkey: "alt 0179", symbol: "³", term: "superscript 3, cubed" },
	{ cat: 11, altkey: "alt 0185", symbol: "¹", term: "superscript 1" },
	{ cat: 11, altkey: "alt 251", symbol: "√", term: "square root" },

	{ cat: 10, altkey: "alt 172, alt 0188", symbol: "¼", term: "one fourth 1/4 vulgar fraction" },
	{ cat: 10, altkey: "alt 171, alt 0189", symbol: "½", term: "one half 1/2 vulgar fraction" },
	{ cat: 10, altkey: "alt 0190", symbol: "¾", term: "three fourths 3/4 vulgar fraction" },

	{ cat: 12, altkey: "alt 227", symbol: "π", term: "pi" },
	{ cat: 14, altkey: "alt 230", symbol: "µ", term: "micro" },
	{ cat: 13, altkey: "alt 236", symbol: "∞", term: "infinity" },
	{ cat: 14, altkey: "alt 166", symbol: "ª", term: "feminine ordinal indicator" },
	{ cat: 14, altkey: "alt 167", symbol: "º", term: "masculine ordinal indicator" },
	{ cat: 14, altkey: "alt 0175", symbol: "¯", term: "macron" },
	{ cat: 14, altkey: "alt 0137", symbol: "‰", term: "Per mille sign, per thousand" },

	// greek
	{ cat: 5, altkey: "alt 224", symbol: "α", term: "lowercase alpha" },
	{ cat: 5, altkey: "alt 226", symbol: "Γ", term: "capital gamma" },
	{ cat: 5, altkey: "alt 235", symbol: "δ", term: "lowercase delta" },
	{ cat: 5, altkey: "alt 238", symbol: "ε", term: "lowercase epsilon" },
	{ cat: 5, altkey: "alt 233", symbol: "Θ", term: "capital theta" },
	{ cat: 5, altkey: "alt 230", symbol: "µ", term: "lowercase mu" },
	{ cat: 5, altkey: "alt 227", symbol: "π", term: "lowercase pi" },
	{ cat: 5, altkey: "alt 228", symbol: "Σ", term: "captial sigma" },
	{ cat: 5, altkey: "alt 229", symbol: "σ", term: "lowercase sigma" },
	{ cat: 5, altkey: "alt 231", symbol: "τ", term: "capital tau" },
	{ cat: 5, altkey: "alt 232", symbol: "Φ", term: "capital phi" },
	{ cat: 5, altkey: "alt 237", symbol: "φ", term: "lowercase phi" },
	{ cat: 5, altkey: "alt 234", symbol: "Ω", term: "capital omega" },

	// writing
	{ cat: 6, altkey: "alt 32", symbol: "&nbsp;", term: "non-blank printing space" },

	{ cat: 6, altkey: "alt 169", symbol: "¬", term: "reversed not sign, beginning of line" },
	{ cat: 6, altkey: "alt 170", symbol: "¬", term: "not sign, angled dash" },
	{ cat: 6, altkey: "alt 0166", symbol: "¦", term: "broken bar, parted rule (in typography)" },
	{ cat: 6, altkey: "alt 20", symbol: "¶", term: "pilcrow" },
	{ cat: 6, altkey: "alt 21", symbol: "§", term: "section" },

	{ cat: 6, altkey: "alt 45", symbol: "-", term: "hyphen" },
	{ cat: 6, altkey: "alt 0150", symbol: "–", term: "en dash" },
	{ cat: 6, altkey: "alt 0151", symbol: "—", term: "em dash" },
	{ cat: 6, altkey: "alt 95", symbol: "_", term: "underscore" },

	{ cat: 6, altkey: "alt 33", symbol: "!", term: "exclamation" },
	{ cat: 6, altkey: "alt 173", symbol: "¡", term: "inverted, turned, exclamation, !" },
	{ cat: 6, altkey: "alt 19", symbol: "‼", term: "double, exclamation, !!" },
	{ cat: 6, altkey: "alt 63", symbol: "?", term: "question" },
	{ cat: 6, altkey: "alt 168", symbol: "¿", term: "inverted, turned, question, ?" },

	{ cat: 6, altkey: "alt 35", symbol: "#", term: "number sign, pound, hash, crosshatch, octothorpe" },
	{ cat: 6, altkey: "alt 37", symbol: "%", term: "percent" },
	{ cat: 6, altkey: "alt 38", symbol: "&amp;", term: "ampersand" },
	{ cat: 6, altkey: "alt 42", symbol: "*", term: "asterisk" },
	{ cat: 6, altkey: "alt 64", symbol: "@", term: "Commercial at, at sign" },      

	{ cat: 6, altkey: "alt 39", symbol: "'", term: "single quote" },
	{ cat: 6, altkey: "alt 0130", symbol: "‚", term: "single low quote" },
	{ cat: 6, altkey: "alt 0145", symbol: "‘", term: "left single quote" },
	{ cat: 6, altkey: "alt 0146", symbol: "’", term: "right single quote" },

	{ cat: 6, altkey: "alt 34", symbol: "\"", term: "double quote" },
	{ cat: 6, altkey: "alt 0132", symbol: "„", term: "double low quote" },
	{ cat: 6, altkey: "alt 0147", symbol: "“", term: "left double quote" },
	{ cat: 6, altkey: "alt 0148", symbol: "”", term: "right double quote" },

	{ cat: 6, altkey: "alt 0139", symbol: "‹", term: "single left-pointing angle quotation mark, left guillemet" },
	{ cat: 6, altkey: "alt 0155", symbol: "›", term: "single right-pointing angle quotation mark, right guillemet" },
	{ cat: 6, altkey: "alt 174", symbol: "«", term: "left-pointing double angle quotation mark, left guillemet, chevrons (in typography)" },
	{ cat: 6, altkey: "alt 175", symbol: "»", term: "right-pointing double angle quotation mark, right guillemet, chevrons (in typography)" },

	{ cat: 6, altkey: "alt 46", symbol: ".", term: "full stop, period, dot, decimal point" },
	{ cat: 6, altkey: "alt 0133", symbol: "…", term: "horizontal ellipsis, three dot leader" },
	{ cat: 6, altkey: "alt 58", symbol: ":", term: "colon" },
	{ cat: 6, altkey: "alt 44", symbol: ",", term: "comma" },
	{ cat: 6, altkey: "alt 59", symbol: ";", term: "semi colon" },

	{ cat: 6, altkey: "alt 47", symbol: "/", term: "solidus, slash, forward, virgule" },   
	{ cat: 6, altkey: "alt 92", symbol: "\\", term: "backward, slash" },

	{ cat: 6, altkey: "alt 40", symbol: "(", term: "left, parenthesis, opening" },
	{ cat: 6, altkey: "alt 41", symbol: ")", term: "right, parenthesis, closing" },
	{ cat: 6, altkey: "alt 91", symbol: "[", term: "left, square, bracket, opening, brace" },
	{ cat: 6, altkey: "alt 93", symbol: "]", term: "right, square, bracket, closing, brace" },
	{ cat: 6, altkey: "alt 123", symbol: "{", term: "left, curly, bracket, opening, brace" },
	{ cat: 6, altkey: "alt 125", symbol: "}", term: "right, curly, bracket, closing, brace" },

	{ cat: 6, altkey: "alt 94", symbol: "^", term: "caret, circumflex" },
	{ cat: 6, altkey: "alt 0168", symbol: "¨", term: "diaresis" },
	{ cat: 6, altkey: "alt 96", symbol: "`", term: "grave, accent" },
	{ cat: 6, altkey: "alt 126", symbol: "~", term: "tilde" }, 
	{ cat: 6, altkey: "alt 0152", symbol: "˜", term: "small tilde" }, 
	{ cat: 6, altkey: "alt 0180", symbol: "´", term: "acute, accent" },
	{ cat: 6, altkey: "alt 0184", symbol: "¸", term: "cedilla" },

	{ cat: 6, altkey: "alt 0183", symbol: "·", term: "middle dot" },
	{ cat: 6, altkey: "alt 124", symbol: "|", term: "vertical, line, bar" },
	{ cat: 6, altkey: "alt 0134", symbol: "†", term: "dagger, obelisk, cross" },
	{ cat: 6, altkey: "alt 0135", symbol: "‡", term: "double dagger, obelisk, cross, diesis" },

	// latin 1
	{ cat: 7, altkey: "alt 225, alt 0233", symbol: "ß", term: "lowercase sharp s, eszett" },
	{ cat: 7, altkey: "alt 0208", symbol: "Ð", term: "capital eth" },
	{ cat: 7, altkey: "alt 0140", symbol: "Œ", term: "capital ligature OE" },
	{ cat: 7, altkey: "alt 0156", symbol: "œ", term: "lowercase ligature oe" },
	{ cat: 7, altkey: "alt 0198", symbol: "Æ", term: "capital AE" },
	{ cat: 7, altkey: "alt 0230", symbol: "æ", term: "lowercase ae, ash (Old English æsc)" },
	{ cat: 7, altkey: "alt 0222", symbol: "Þ", term: "capital thorn" },
	{ cat: 7, altkey: "alt 0254", symbol: "þ", term: "lowercase small thorn" },
	{ cat: 7, altkey: "alt 0240", symbol: "ð", term: "lowercase eth" },
	{ cat: 7, altkey: "alt 159, alt 0131", symbol: "ƒ", term: "lowercase f with hook" },

	// latin 2
	{ cat: 8, altkey: "alt 0192", symbol: "À", term: "capital a with grave" },
	{ cat: 8, altkey: "alt 0193", symbol: "Á", term: "captial a with accent" },
	{ cat: 8, altkey: "alt 0194", symbol: "Â", term: "captial a with circumflex" },
	{ cat: 8, altkey: "alt 0195", symbol: "Ã", term: "captial a with tilde" },
	{ cat: 8, altkey: "alt 0196", symbol: "Ä", term: "captial a with diaresis" },
	{ cat: 8, altkey: "alt 0197", symbol: "Å", term: "captial a with ring above" },
	{ cat: 8, altkey: "alt 0224", symbol: "à", term: "lowercase a with grave" },
	{ cat: 8, altkey: "alt 0225", symbol: "á", term: "lowercase a with accent" },
	{ cat: 8, altkey: "alt 0226", symbol: "â", term: "lowercase a with circumflex" },
	{ cat: 8, altkey: "alt 0227", symbol: "ã", term: "lowercase a with tilde" },
	{ cat: 8, altkey: "alt 0228", symbol: "ä", term: "lowercase a with diaeresis" },
	{ cat: 8, altkey: "alt 0229", symbol: "å", term: "lowercase a with ring above" },

	{ cat: 8, altkey: "alt 0199", symbol: "Ç", term: "capital c with cedilla" },
	{ cat: 8, altkey: "alt 0231", symbol: "ç", term: "lowercase c with cedilla" },

	{ cat: 8, altkey: "alt 0200", symbol: "È", term: "capital e with grave" },
	{ cat: 8, altkey: "alt 0201", symbol: "É", term: "captial e with accent" },
	{ cat: 8, altkey: "alt 0202", symbol: "Ê", term: "captial e with circumflex" },
	{ cat: 8, altkey: "alt 0203", symbol: "Ë", term: "captial e with diaresis" },
	{ cat: 8, altkey: "alt 0232", symbol: "è", term: "lowercase e with grave" },
	{ cat: 8, altkey: "alt 0233", symbol: "é", term: "lowercase e with accent" },
	{ cat: 8, altkey: "alt 0234", symbol: "ê", term: "lowercase e with circumflex" },
	{ cat: 8, altkey: "alt 0235", symbol: "ë", term: "lowercase e with diaresis" },

	{ cat: 8, altkey: "alt 0204", symbol: "Ì", term: "capital i with grave" },
	{ cat: 8, altkey: "alt 0205", symbol: "Í", term: "capital i with accent" },
	{ cat: 8, altkey: "alt 0206", symbol: "Î", term: "capital i with circumflex" },
	{ cat: 8, altkey: "alt 0207", symbol: "Ï", term: "capital i with diaresis" },
	{ cat: 8, altkey: "alt 0236", symbol: "ì", term: "lowercase i with grave" },
	{ cat: 8, altkey: "alt 0237", symbol: "í", term: "lowercase i with accent" },
	{ cat: 8, altkey: "alt 0238", symbol: "î", term: "lowercase i with circumflex" },
	{ cat: 8, altkey: "alt 0239", symbol: "ï", term: "lowercase i with diaresis" },
	
	{ cat: 8, altkey: "alt 165", symbol: "Ñ", term: "capital n with tilde, enye" },
	{ cat: 8, altkey: "alt 164", symbol: "ñ", term: "lowercase n with tilde, enye" },
	
	{ cat: 8, altkey: "alt 0210", symbol: "Ò", term: "capital o with grave" },
	{ cat: 8, altkey: "alt 0211", symbol: "Ó", term: "capital o with acute" },
	{ cat: 8, altkey: "alt 0212", symbol: "Ô", term: "capital o with circumflex" },
	{ cat: 8, altkey: "alt 0213", symbol: "Õ", term: "capital o with tilde" },
	{ cat: 8, altkey: "alt 0214", symbol: "Ö", term: "capital o with diaresis" },
	{ cat: 8, altkey: "alt 0216", symbol: "Ø", term: "capital o with stroke" },
	{ cat: 8, altkey: "alt 0242", symbol: "ò", term: "lowercase o with grave" },
	{ cat: 8, altkey: "alt 0243", symbol: "ó", term: "lowercase o with acute" },
	{ cat: 8, altkey: "alt 0244", symbol: "ô", term: "lowercase o with circumflex" },
	{ cat: 8, altkey: "alt 0245", symbol: "õ", term: "lowercase o with tilde" },
	{ cat: 8, altkey: "alt 0246", symbol: "ö", term: "lowercase o with diaresis" },
	{ cat: 8, altkey: "alt 0248", symbol: "ø", term: "lowercase o with stroke" },

	{ cat: 8, altkey: "alt 0138", symbol: "Š", term: "capital s with caron, s hacek" },
	{ cat: 8, altkey: "alt 0154", symbol: "š", term: "lowercase s with caron, S hacek" },

	{ cat: 8, altkey: "alt 0217", symbol: "Ù", term: "capital u with grave" },
	{ cat: 8, altkey: "alt 0218", symbol: "Ú", term: "capital u with acute" },
	{ cat: 8, altkey: "alt 0219", symbol: "Û", term: "capital u with circumflex" },
	{ cat: 8, altkey: "alt 0220", symbol: "Ü", term: "capital u with diaresis" },
	{ cat: 8, altkey: "alt 0252", symbol: "ù", term: "lowercase u with grave" },
	{ cat: 8, altkey: "alt 0249", symbol: "ú", term: "lowercase u with acute" },
	{ cat: 8, altkey: "alt 0250", symbol: "û", term: "lowercase u with circumflex" },
	{ cat: 8, altkey: "alt 0251", symbol: "ü", term: "lowercase u with diaresis" },

	{ cat: 8, altkey: "alt 0221", symbol: "Ý", term: "capital y with acute" },
	{ cat: 8, altkey: "alt 0159", symbol: "Ÿ", term: "capital y with diaresis" },
	{ cat: 8, altkey: "alt 0253", symbol: "ý", term: "lowercase y with acute" },
	{ cat: 8, altkey: "alt 0255", symbol: "ÿ", term: "lowercase y with diaresis" },

	{ cat: 8, altkey: "alt 0142", symbol: "Ž", term: "capital Z with caron, Z hacek" },
	{ cat: 8, altkey: "alt 0158", symbol: "ž", term: "lowercase z with caron, z hacek" },

	// design, box drawings
	{ cat: 9, altkey: "alt 176", symbol: "░", term: "light shade" },
	{ cat: 9, altkey: "alt 177", symbol: "▒", term: "medium shade" },
	{ cat: 9, altkey: "alt 178", symbol: "▓", term: "dark shade" },
	{ cat: 9, altkey: "alt 179", symbol: "│", term: "single vertical" },
	{ cat: 9, altkey: "alt 180", symbol: "┤", term: "single vertical and left" },
	{ cat: 9, altkey: "alt 181", symbol: "╡", term: "single vertical and double left" },
	{ cat: 9, altkey: "alt 182", symbol: "╢", term: "double vertical and single left" },
	{ cat: 9, altkey: "alt 183", symbol: "╖", term: "double down and single left" },
	{ cat: 9, altkey: "alt 184", symbol: "╕", term: "single down and double left" },
	{ cat: 9, altkey: "alt 185", symbol: "╣", term: "double vertical and left" },
	{ cat: 9, altkey: "alt 186", symbol: "║", term: "double vertical" },
	{ cat: 9, altkey: "alt 187", symbol: "╗", term: "double down and left" },
	{ cat: 9, altkey: "alt 188", symbol: "╝", term: "double up and left" },
	{ cat: 9, altkey: "alt 189", symbol: "╜", term: "double up and single left" },
	{ cat: 9, altkey: "alt 190", symbol: "╛", term: "single up and double left" },
	{ cat: 9, altkey: "alt 191", symbol: "┐", term: "single down and left" },
	{ cat: 9, altkey: "alt 192", symbol: "└", term: "single up and right" },
	{ cat: 9, altkey: "alt 193", symbol: "┴", term: "single up and horizontal" },
	{ cat: 9, altkey: "alt 194", symbol: "┬", term: "single down and horizontal" },
	{ cat: 9, altkey: "alt 195", symbol: "├", term: "single vertical and right" },
	{ cat: 9, altkey: "alt 196", symbol: "─", term: "single horizontal" },
	{ cat: 9, altkey: "alt 197", symbol: "┼", term: "single vertical and horizontal" },
	{ cat: 9, altkey: "alt 198", symbol: "╞", term: "single vertical and double right" },
	{ cat: 9, altkey: "alt 199", symbol: "╟", term: "double vertical and single right" },
	{ cat: 9, altkey: "alt 200", symbol: "╚", term: "double up and right" },
	{ cat: 9, altkey: "alt 201", symbol: "╔", term: "double down and right" },
	{ cat: 9, altkey: "alt 202", symbol: "╩", term: "double up and horizontal" },
	{ cat: 9, altkey: "alt 203", symbol: "╦", term: "double down and horizontal" },
	{ cat: 9, altkey: "alt 204", symbol: "╠", term: "double vertical and right" },
	{ cat: 9, altkey: "alt 205", symbol: "═", term: "double horizontal" },
	{ cat: 9, altkey: "alt 206", symbol: "╬", term: "double vertical and horizontal" },
	{ cat: 9, altkey: "alt 207", symbol: "╧", term: "single up and double horizontal" },
	{ cat: 9, altkey: "alt 208", symbol: "╨", term: "double up and single horizontal" },
	{ cat: 9, altkey: "alt 209", symbol: "╤", term: "single down and double horizontal" },
	{ cat: 9, altkey: "alt 210", symbol: "╥", term: "double down and single horizontal" },
	{ cat: 9, altkey: "alt 211", symbol: "╙", term: "double up and single right" },
	{ cat: 9, altkey: "alt 212", symbol: "╘", term: "single up and double right" },
	{ cat: 9, altkey: "alt 213", symbol: "╒", term: "single down and double right" },
	{ cat: 9, altkey: "alt 214", symbol: "╓", term: "double down and single right" },
	{ cat: 9, altkey: "alt 215", symbol: "╫", term: "double vertical and single horizontal" },
	{ cat: 9, altkey: "alt 216", symbol: "╪", term: "single vertical and double horizontal" },
	{ cat: 9, altkey: "alt 217", symbol: "┘", term: "single up and left" },
	{ cat: 9, altkey: "alt 218", symbol: "┌", term: "single down and right" },
	{ cat: 9, altkey: "alt 219", symbol: "█", term: "full block" },
	{ cat: 9, altkey: "alt 220", symbol: "▄", term: "bottom half block" },
	{ cat: 9, altkey: "alt 221", symbol: "▌", term: "left half block" },
	{ cat: 9, altkey: "alt 222", symbol: "▐", term: "right half block" },
	{ cat: 9, altkey: "alt 223", symbol: "▀", term: "top half block" },
];

function getCatName(cid) {
	for ( var item of cats ) {
		if ( item.id == cid ) {
			return (item.name).toLowerCase();
		} else {
			if ( item.subcats.length > 0 ) {
				for ( var item2 of item.subcats ) {
					if ( item2.id == cid ) {
						return (item.name).toLowerCase() + '|' + (item2.name).toLowerCase();
					}
				}
			}
		}
	}
	return false;
}

function equalHeightCards() {
	let tallest = 0;

	$('.card').each(function(){
		$(this).css('min-height', 'unset')
		if ( $(this)[0].offsetHeight > tallest ) {
			tallest = $(this)[0].offsetHeight;
		}
	});
	console.log(tallest);
	//$('.card').css({'min-height': tallest + 'px'});
	//$('.card').animate({'min-height': tallest + 'px'});
}