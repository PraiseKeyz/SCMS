/**
 * ML Helper Functions (TypeScript native)
 *
 * These helper functions are foundational algorithms intended to eventually
 * replace the hardcoded heuristic logic in the RecommendationsService with
 * a data-driven approach.
 */

/**
 * 1. Simple Linear Regression
 * Useful for predicting a continuous target (e.g., precise parking occupancy percentage
 * or ETA in seconds) based on a single continuous feature (e.g., time of day).
 */
export function predictLinearRegression(
  xList: number[],
  yList: number[],
  targetX: number,
): number {
  if (xList.length !== yList.length || xList.length === 0) return 0;

  const n = xList.length;
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumXX = 0;

  for (let i = 0; i < n; i++) {
    sumX += xList[i];
    sumY += yList[i];
    sumXY += xList[i] * yList[i];
    sumXX += xList[i] * xList[i];
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return slope * targetX + intercept;
}

/**
 * 2. Exponential Moving Average (EMA)
 * Useful for time series forecasting (e.g., predicting the next 15-minute crowd level
 * based on recent historical crowd density).
 */
export function calculateEMA(series: number[], alpha: number = 0.3): number {
  if (series.length === 0) return 0;

  let ema = series[0];
  for (let i = 1; i < series.length; i++) {
    ema = alpha * series[i] + (1 - alpha) * ema;
  }

  return ema;
}

/**
 * 3. Logistic Regression Helper (Sigmoid)
 * Useful for binary classification (e.g., will this parking zone be FULL in 30 mins: Yes/No?).
 */
export function sigmoid(z: number): number {
  return 1 / (1 + Math.exp(-z));
}

export function predictProbability(
  features: number[],
  weights: number[],
  bias: number,
): number {
  if (features.length !== weights.length) {
    throw new Error('Features and weights must have the same length');
  }

  let z = bias;
  for (let i = 0; i < features.length; i++) {
    z += features[i] * weights[i];
  }

  return sigmoid(z);
}

/**
 * 4. K-Nearest Neighbors (KNN) Distance Metric
 * Useful for finding similar past historical events (e.g., finding past football matches
 * with similar attendance to predict the current match's impact on parking).
 */
export function euclideanDistance(
  vectorA: number[],
  vectorB: number[],
): number {
  const len = Math.min(vectorA.length, vectorB.length);
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += Math.pow(vectorA[i] - vectorB[i], 2);
  }

  return Math.sqrt(sum);
}
