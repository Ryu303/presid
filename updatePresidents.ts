import { Project, SyntaxKind } from "ts-morph";

const project = new Project();
project.addSourceFilesAtPaths("src/data/presidents/*.ts");

const files = project.getSourceFiles();

for (const file of files) {
  if (file.getBaseName() === "index.ts") continue;

  const varDecl = file.getVariableDeclarations()[0];
  if (!varDecl) continue;

  const initializer = varDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
  if (!initializer) continue;

  // Add cabinetRisk to president if missing
  if (!initializer.getProperty("cabinetRisk")) {
    initializer.addPropertyAssignment({
      name: "cabinetRisk",
      initializer: "{ avgTenureMonths: 15, initialDropoutRate: 20 }"
    });
  }

  // Get policies array
  const policiesProp = initializer.getProperty("policies");
  if (policiesProp && policiesProp.isKind(SyntaxKind.PropertyAssignment)) {
    const policiesArray = policiesProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (policiesArray) {
      for (const element of policiesArray.getElements()) {
        if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
          // Check for lineage
          if (!element.getProperty("lineage")) {
            element.addPropertyAssignment({
              name: "lineage",
              initializer: '{ prev: "이전 정책 (데이터 준비 중)", next: "다음 정책 (데이터 준비 중)" }'
            });
          }
          // Check for frictionIndex
          if (!element.getProperty("frictionIndex")) {
            element.addPropertyAssignment({
              name: "frictionIndex",
              initializer: "{ veto: 0, filibusterHours: 0, strikeDays: 0 }"
            });
          }
          // Check for mediaSnapshot
          if (!element.getProperty("mediaSnapshot")) {
            element.addPropertyAssignment({
              name: "mediaSnapshot",
              initializer: `{
        date: "YYYY.MM.DD",
        conservative: { headline: "관련 보도 데이터 수집 중...", source: "보수 매체" },
        progressive: { headline: "관련 보도 데이터 수집 중...", source: "진보 매체" }
      }`
            });
          }
        }
      }
    }
  }
}

project.saveSync();
console.log("Updated all president data files successfully.");
