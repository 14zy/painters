#!/bin/bash

# for i in {1..10}
# do
# 	convert ru/$i.png -auto-orient -quality 70 ru/ru.png -gravity southwest -composite ru/$i.png
# done
#
# for i in {1..10}
# do
# 	convert en/$i.png -auto-orient -quality 70 en/en.png -gravity southwest -composite en/$i.png
# done



for set in basic french realism impressionism renaissance russian
do
	for lang in ru en
	do
		echo $set/$lang
		
		for i in {1..10}
		do
			echo "Конвертим $i"
			convert frame.png -auto-orient -quality 100 $set/$lang/$i.png -gravity center -composite $set/$lang/$i.jpg
		done
		echo $set/$lang completed
			
	done
	
done
	
	


#
#
# for i in {1..10}
# do
# 	echo "Конвертим $i"
# 	convert frame.png -auto-orient -quality 100 basic/ru/$i.png -gravity center -composite basic/ru/$i.jpg
# done
# echo "basic/ru completed"
#
# for i in {1..10}
# do
# 	echo "Конвертим $i"
# 	convert frame.png -auto-orient -quality 100 basic/ru/$i.png -gravity center -composite basic/ru/$i.jpg
# done


## convert ../frame.png -auto-orient -quality 100 ru/1.png -gravity center -composite ru/1.jpg