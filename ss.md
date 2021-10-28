import pandas as pd 
from sklearn.model_selection import train_test_split
from sklearn.linear_model import logisticRegression

# 加载，查看数据集
columns_names = ['area', 'perimeter', 'compactness', 'length-kernel', 'width-kernel', 'asymmetry-coefficient', 'length-kernel-groove', 'label']
datasets.columns = columns_names
display(datasets)

# 数据预处理，拆分数据集
data = datasets.values[:, : -1] # 特征
target = datasets.values[:, -1] # 标签
X_train,X_test,y_train,y_test = train_test_split(data,target,test_size = 0.25,random_state = 0)
print(X_train.shape, y_train.shape)
print(X_test.shape, y_test.shape)

# 创建分类模型
model = LogisticRegression().fit(X_train, y_train)
score = model.score(X_test, y_test)

# 预测测试前 10个样本的品种，并输出实际品种
y_pred = model.predict(X_test[: 10])
y_true = y_test[: 10]
print(y_pred)
print(y_true)