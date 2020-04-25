submit:
	result=$$(leetcode submit $(file)) && echo "$$result" && \
	msg=`echo "feat(algorithm): leetcode submit $(file)\n$$result"` && git add $(file) 1>/dev/null 2>&1 && git commit -m "$$msg" 1>/dev/null 2>&1;

list:
	leetcode list -t google -q Le

do:
	leetcode show -x -l javascript -o google -ge $(id)

solution:
	leetcode show -x -l javascript -o google --solution $(id)
