import React from 'react';
import { Descriptions, Card, Tag } from 'antd';

export default function RelationCard({
  id,
  color,
  tag,
  title,
  description,
  children,
  extra,
}) {
  return (
    <div>
      <Card hoverable className="relation-card">
        {color && (
          <div
            className={
              color === 'green'
                ? 'relation-card-side relation-card-side-green'
                : 'relation-card-side relation-card-side-red'
            }
          ></div>
        )}
        <Tag className="relation-card-tag" color="blue">
          {tag}
        </Tag>
        <div className="relation-card-body">
          <Card.Meta
            title={
              <span>
                {title}
                <span className="relation-card-id">{id}</span>
              </span>
            }
            description={description}
          />
          <br />
          <br />
          {children}
        </div>
        <div className="relation-card-footer">
          <Descriptions
            layout="vertical"
            colon={false}
            size="small"
            column={extra.length}
          >
            {extra.map((item, index) => {
              return (
                <Descriptions.Item key={index} label={item.label} span={1}>
                  {item.value}
                </Descriptions.Item>
              );
            })}
          </Descriptions>
        </div>
      </Card>
    </div>
  );
}
