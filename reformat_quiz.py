import json
path = r'src/app/json-quizes/quizAmericanMafia.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)
lines = ['[\n']
for i, item in enumerate(data):
    lines.append('  {\n')
    keys = list(item.keys())
    for j, k in enumerate(keys):
        v = item[k]
        if k == 'answers':
            lines.append(f'    "{k}": {json.dumps(v, ensure_ascii=False)}')
        else:
            lines.append(f'    "{k}": {json.dumps(v, ensure_ascii=False)}')
        lines[-1] += ',\n' if j != len(keys) - 1 else '\n'
    lines.append('  }' + (',\n' if i != len(data) - 1 else '\n'))
lines.append(']\n')
with open(path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('rewritten', len(data), 'items')
