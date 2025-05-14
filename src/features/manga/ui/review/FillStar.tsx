function FillStar() {
	return (
		<svg
			viewBox='0 0 25 27'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className='inline-block h-[22px] w-[22px] xl:h-[27px] xl:w-[25px]'
		>
			<rect width={24.75} height={27} fill='url(#pattern0_2280_53)' />
			<rect width={24.75} height={27} fill='url(#pattern1_2280_53)' />
			<defs>
				<pattern
					id='pattern0_2280_53'
					patternContentUnits='objectBoundingBox'
					width={1}
					height={1}
				>
					<use
						xlinkHref='#image0_2280_53'
						transform='matrix(0.0109091 0 0 0.01 -0.0454545 0)'
					/>
				</pattern>
				<pattern
					id='pattern1_2280_53'
					patternContentUnits='objectBoundingBox'
					width={1}
					height={1}
				>
					<use
						xlinkHref='#image1_2280_53'
						transform='matrix(0.0109091 0 0 0.01 -0.0454545 0)'
					/>
				</pattern>
				<image
					id='image0_2280_53'
					width={100}
					height={100}
					preserveAspectRatio='none'
					xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABr5JREFUeAHtnXtz20QQwM9p9HBiN22A0lIKLbSFKRSmpAUy4eEWSGrppDwaxc5/IYlPZ3c8AzP9AP7mhZWjxFHs6HV6nLKZyei9d/fbvdPpbm9NCP4hASSABJAAEkACSAAJIAEkgASQQHQCzmpdZdbXysB6Af+wT5zVenQBeKcoAjX12P5OdWlHda398/+0o7LNp4SQmqjEUE4IAYUZP51XQlAp1r7C6Y8hYvCyCAI6o5+FKcO/DveKSBNlzCIwGs1pLrV84GFbrWfaZDSamyUOz6ckoPW2H4cpIXhd6xmPUyaLj08lMGrNq5xuB4GHH5s7hK0oU2XiyeQE1CPz23D4F1/u3jM965vkKeOTFwkM25rq0t3ECnHpLhm2tYuC8UwiAgq3nyVXxrjWKLz9LFHi+FCAwL9OXeXGXlqFqNzaI8xaCEjHw7gE4AMvtTJOvubxYzEu/eD9h3ZT7ZldUQpRudklw/b1YDJ4HJGAzugvwpRxUkvq3F6LmDzedo7A0cayaGX48ppvtz84lxYehBPQB/ZLH6Dorc7Ml+E5wDtOCTT49i3RSgjKWzy2Pz5NEHcuJ6C59l9BgKKPNW5uXJ4LvOoRqA8274mGP0tefdj+FLFfTqCmudSYBVD0eY2ZJnmPM4szVaKx9peioYfJ0/vmFzMzdKUvOM411TU2wwCKv25s4iTWFMvT+vZX4mHPGI4POEZA2lOydEVPHbR0/dh6oPZNpyiFQNo637pPDlr61dECzG0zZwngKy79XneN31RmbRWmhEAtOc0Ht97offNP8POCmtP4u/0RGbXm5VUU9FoGrUad07sqM57C2JHXc+ICBwlnwczyPLO2wIg8Yzq2HpCjjeXyvXscp754YNwGSwKLAssSMneRJVihsmkHjA2Mbmx89C4YYz616aClQ7dU6fngrTen1VxoIaO9iEudNjR7Lv1Dce3nXrda6LuJrSjeJJHsTU6RRsPNLrQg6b1f2IqiucbrUltjkaBjpu2Nn6XpIIicPkWlnjhb9KwXyd4x4Fww1bu8Am18TMsWa0y0Qxwn/pIJ/a3xudiMoCJ9nomcwFW3/cQXgFvBxgQLi+L+FTHyelUUn2yEGVxwCm1rBVtlicqS2BUJnAFQKWINQ+e0Fbe1OrufWQuqa+6gUkQpBZZGpHVn7Zs3VY7DJOmNku4SUf5gTWZ9qLIC5ytK1P4nUgw39sC16azpEbAH8wKFTiLJqhRu7GXmA7Y4MG6DW38iK5EVaKp8087Cof2JgPowW8QC27iDQypRXvK0A5N0s0kKvFIfrN8TukwglRVGgZPzPdzswtCTQOThorwF/DhHEgjrYe3DGhSdv74fTjCDO2AIADKA75SzGqgN7IcZoI4uEse8JpTh0kfRyWV4Z5FObuWpne0nGSKOLxpiVZUHzpnV5pKnsgYmGMewyhlG0T20cWyu+Bac1xPgSJaLVRatCNfaVxj9IS+uqdIREXmh7EpV+uZKKkh5PwwOdWWHmjR/ENFOxhCCtTpvryUtdFmfgzLJqIxxhazgNDA5tJt5tzbi0hu2r5fV0pPmK/F8uDiqySV5SxJK0BtKCn/ac5kPpyfHHf5kFb/goUzhJS/pHYprPJ9mZTKfk667O2kbVXQjSufGM0mngP04MXZlqTUat2gBKAUkORrNVXJWsWd2yYhIGJy5gl1evxZL+S0C3UO/AFXbgqOHgDYkXxFV7PL6hiVl+HLoHvoFqNpWmmH3yToI3cOqKcIvj96zfp8sqxT70D30C1C1rXxd3/ekVm3vRtqRK/BZBYfdg7U8vxAaAhrEBbZzJ1iAqh2D47kAVPmIgG5h1RQQLI9WFqe4KCqtcpfXV4xUXV/oFvoZz3oL8UMgKBr4GcN+1un58iF2VhTjLMU9eXR5IdjytPUXsNJL59YrH1xWWy/EbCloh2ci0y4vBEmbpohgtjzFZBg/Hrr1cnifvFtfzMIqYbKrMfw//mHMvwZfv5VVYP/0S5xjFibR7cxZEqkQgAmrgBPlZeIhkOEF3hTodCGHB4oXbCC9w7XeN38lffPmBFMxu0cbyyBbhNFI88vUiV/q3Ox6noEHWzfE0L9Eyj9bN7xf8Em4AkymlzqBZV2xLNBThL1WSBPAnKV5l67GnW6GlWOXqLt0l2rR2mva8RyXy+CeeWg3lb71cxTFnHyDSPZ77SMy5/llTf2VNdoB73jybn2xdKY0aDXGsSZp50It75ldKJOcTg4+6UO7CdO5UEiIY+tVdRl+BhXiFA/sh2A4UIs9j8Uy1GSfK26RABJAAkgACSABJIAEkAASQAKCCPwHtVtxNGpXjQ8AAAAASUVORK5CYII='
				/>
				<image
					id='image1_2280_53'
					width={100}
					height={100}
					preserveAspectRatio='none'
					xlinkHref='data:image/png;base64,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'
				/>
			</defs>
		</svg>
	)
}

export default FillStar
