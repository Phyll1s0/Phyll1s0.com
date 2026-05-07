#!/usr/bin/env node
/**
 * 文章加密工具
 * 用法: node encrypt-post.js <文章路径> <密码>
 */

const fs = require('fs');
const crypto = require('crypto');

function encrypt(text, password) {
  const algorithm = 'aes-256-gcm';
  const salt = crypto.randomBytes(32);
  const key = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha512');
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    salt: salt.toString('hex'),
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

// 主程序
const filePath = process.argv[2];
const password = process.argv[3];

if (!filePath || !password) {
  console.log('用法: node encrypt-post.js <文章路径> <密码>');
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf-8');
const encrypted = encrypt(content, password);

const output = `---
encrypted: true
salt: ${encrypted.salt}
iv: ${encrypted.iv}
authTag: ${encrypted.authTag}
---

${encrypted.encrypted}`;

fs.writeFileSync(filePath + '.encrypted', output);
console.log('加密完成:', filePath + '.encrypted');
