submit:
	result=$$(leetcode submit $(file)) && echo "$$result" && \
	git add $(file) 1>/dev/null 2>&1 && git commit -m "feat(algorithm): leetcode submit $(file) \
$$result" 1>/dev/null 2>&1; git push
