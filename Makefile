submit:
	result=$$(leetcode submit $(file)) && echo "$$result" && \
	git add $(file) 1>/dev/null 2>&1 && git commit -m "leetcode submit $(file) \
$$result" 1>/dev/null 2>&1; git push
