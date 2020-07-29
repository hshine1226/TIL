# Text 정렬

## writing-mode

writing-mode는 텍스트를 가로, 세로중 어떤 방향으로 놓을지 정하는 css property이다.

### Syntax

``` css
/* keyword values */
writing-mode: horizontal-tb;
writing-mode: vertical-lr;
writing-mode: vertical-rl;
```

### Demo

- horizontal-tb

![image-20200729140652219](https://user-images.githubusercontent.com/31975706/88759706-4c1d8200-d1a6-11ea-8e51-b773fb0ef36e.png)

- vertical-lr

![image-20200729140742668](https://user-images.githubusercontent.com/31975706/88759736-593a7100-d1a6-11ea-8013-f79f27bb52c6.png)

- vertical-rl

![image-20200729140757563](https://user-images.githubusercontent.com/31975706/88759748-60617f00-d1a6-11ea-969a-9350a1c05a19.png)

## white-space

white-space는 요소가 공백 문자를 처리하는 법을 지정하는 css property이다.

### syntax

``` css
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;
```

### Demo

- white-space: normal;

![image-20200729141128803](https://user-images.githubusercontent.com/31975706/88759764-68b9ba00-d1a6-11ea-9133-d8bc61b1ee42.png)

- white-space: nowrap;

![image-20200729141141987](https://user-images.githubusercontent.com/31975706/88759776-6f483180-d1a6-11ea-925e-333e63599b0f.png)

- white-space: pre;

![image-20200729141154323](https://user-images.githubusercontent.com/31975706/88759796-7a9b5d00-d1a6-11ea-8082-03ea42f233dd.png)

- white-space: pre-wrap;

![image-20200729141205483](https://user-images.githubusercontent.com/31975706/88759807-8424c500-d1a6-11ea-8b41-ff25b182e3d7.png)

- white-space: pre-line;

![image-20200729141215507](https://user-images.githubusercontent.com/31975706/88759829-8dae2d00-d1a6-11ea-9f19-2ba177bb28ca.png)

## text-orientation

text-orientation은 텍스트 글자들의 방향을 정하는 css property이다.

### syntax

``` css
/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;
```

### Demo

- writing-mode: vertical-rl; 
  text-orientation: mixed;

![image-20200729141612755](https://user-images.githubusercontent.com/31975706/88759844-9999ef00-d1a6-11ea-8ab3-b38f96a8ecf4.png)

- writing-mode: vertical-rl;
  text-orientation: upright;

![image-20200729141631028](https://user-images.githubusercontent.com/31975706/88759853-9f8fd000-d1a6-11ea-8472-686d3adff3a5.png)