import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# 加载，查看数据集
col_m = ['area', 'perimeter', 'compactness', 'length-kernel', 'width-kernel', 'asymmetry-coefficient', 'length-kernel-groove', 'label']
da = pd.read_csv('seeds_dataset.csv', header = None)
da.columns = col_m
display(da)

# 数据预处理，拆分数据集
data = da.values[:, : -1] # 特征
target = da.values[:, -1] # 标签
X_x,X_t,y_y,y_t = train_test_split(data,target,test_size = 0.25,random_state = 0)
print(X_x.shape, y_y.shape)
print(X_t.shape, y_t.shape)

# 创建分类模型
mo = LogisticRegression().fit(X_x, y_y)
sc = mo.score(X_t, y_t)
print(sc)

# 预测测试前 10个样本的品种，并输出实际品种
y_p = mo.predict(X_t[: 10])
y_s = y_t[: 10]
print(y_p)
print(y_s)