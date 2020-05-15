SHELL:=/bin/bash
start=/var/tmp/leecode-last-start
duration=/var/tmp/leecode-duration
company=google

submit: time
	@file=$$(git ls-files -om -x node_modules) && \
	result=$$(leetcode submit $${file}) && echo "$$result" && \
	msg=`echo -e "feat(algorithm): leetcode submit $$(echo $${file} | rg -e '[^/]+$$' -o) \n\nduration: $$(cat $(duration))\n\n$$result"` && git add $$file 1>/dev/null 2>&1 && git commit -m "$$msg" 1>/dev/null 2>&1;
	@git push 1>/dev/null

list:
	@leetcode list -t $(company) -q Le

stat:
	@leetcode stat -t $(company)

do:
	@date +%s > $(start)
	@company=src && \
	tags=$$(leetcode show -x -l javascript -o $${company} $(id) -g | rg -e 'Tags:' | xargs -n1 echo | sort | rg -v : | tr '\n' '.') && \
	file=$$(git ls-files -om -x node_modules) && \
	file_with_tags=$$(echo $$file | rg -e '(?P<pre>.*\d+\.[a-z-]+\.)js' -r "\$${pre}$${tags}")$$(rg --files $$company | grep $${file:0:-3} | wc -l).js && \
	mv $$file $$file_with_tags && \
	sed -i 's/ //g' $$file_with_tags && \
	echo "module.exports = $$(cat $$file_with_tags | rg -o '^var ([a-zA-Z]+) ' -r '$$1')" >> $$file_with_tags && yarn eslint --fix $$file_with_tags && \
	vim $$file_with_tags

run:
	@file=$$(git ls-files -om -x node_modules) && \
	leetcode run $$file

local:
	@file=$$(git ls-files -om -x node_modules) && \
	node $$file

solution:
	@leetcode show -x -l javascript $(id) --solution

tag_list:
	@tags_all=$$(rg --files -g '*.js' | rg -e '/\d+\.[a-z-]+\.(?P<tag>.*?)(\.\d+)?\.js' -or '$$tag' | tr '.' '\n' | sort) && \
	echo "$$tags_all" | uniq | xargs -n 1 -I tag bash -c "echo tag \$$(echo '$$tags_all' | grep tag | wc -l)" | column -t -c ' ' | sort -nrk 2

history:
	@submits_all=$$(git log --format="%B" | rg -e "feat\(algorithm\): leetcode submit (\d+\.[a-zA-Z-]+)" -or '$$1') && \
	echo "$$submits_all" | uniq | xargs -n 1 -I submit bash -c "echo submit \$$(echo '$$submits_all' | grep submit | wc -l)" | column -t -c ' ' | sort -nrk 2


start:
	@date +%s > $(start); \
	echo $$(date +'%H:%M:%S') $$(cat $(start))

time:
	@format() { \
		s=$$1; \
		((h=$$s/3600)); \
		((m=$$s%3600/60)); \
		((s=$$s%60)); \
		time=$$(echo $$h:$$m:$$s); \
		echo $$time > $(duration); \
		echo "  duration: $$time"; \
	}; \
	format $$(bc <<< "$$(date +%s) - $$(cat $(start) 2>/dev/null || echo $$(date +%s))"); \

clean:
	rm -f $(start) $(duration)
