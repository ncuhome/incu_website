import styles from "./index.module.styl";

const data = [
  {
    title: "推荐阅读",
    items: [
      {
        name: "家园四年",
        url: "https://ncuhome.yuque.com/books/share/e98759b8-1561-41a0-a80a-db3f3a65b727?",
      },
      {
        name: "用10MB内存做点更有意义的事儿",
        url: "https://mp.weixin.qq.com/s/4MZ-uwnm5G1knbVGVNpgqw",
      },
    ],
  },
  {
    title: "社区",
    items: [
      { name: "家园工作室", url: "https://team.ncuos.com/" },
      { name: "GitHub", url: "https://github.com/ncuhome" },
      { name: "哔哩哔哩", url: "https://space.bilibili.com/444274979" },
      {
        name: "知乎",
        url: "https://www.zhihu.com/people/nan-chang-da-xue-jia-yuan-gong-zuo-shi",
      },
      { name: "Hackweek 2021", url: "https://hack.ncuos.com/" },
    ],
  },
  {
    title: "生态",
    items: [
      { name: "云家园", url: "https://ncuos.com" },
      { name: "US", url: "http://usv2.ncuos.com/" },
      { name: "语燕", url: "https://zhuanlan.zhihu.com/p/114508611" },
    ],
  },
  {
    title: "更多",
    items: [
      {
        name: "加入我们",
        url: "https://ncuhomer.feishu.cn/docs/doccnIosAt7Qeep4TE9pdhAeQTK",
      },
      { name: "南昌大学", url: "https://www.ncu.edu.cn/" },
      { name: "南昌大学 · 学生工作处", url: "http://xgc.ncu.edu.cn/" },
      { name: "南昌大学 · 信息工程学院", url: "http://ies.ncu.edu.cn/" },
    ],
  },
];

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.links}>
          {data.map((link, i) => (
            <div className={styles.col} key={i}>
              <h4>{link.title}</h4>
              <ul>
                {link.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.copyright}>
          Copyright © {new Date().getFullYear()} 南大家园（iNCU）. By NCUHOME.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
